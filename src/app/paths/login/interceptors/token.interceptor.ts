import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/service_login/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${token}`

        },
        withCredentials: true
      });
      // console.log(request);
    }
    return next.handle(request).pipe(
      // @ts-ignore
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 403:
              this.authService.logout();
          }
        }
      })
    );
  }
}
