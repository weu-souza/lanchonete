import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import jwt_decode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {UserToken} from '../../models/user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mostrarMenu = new EventEmitter<boolean>();
  token = '';

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {
  }

  baseUrl: string = environment.baseUrl;

  estaAutenticado(): boolean {
    return !!this.getToken();
  }

  eadm(): boolean {
    return !!this.cookieService.get('eadm');
  }

  logar(usuario: Usuario) {
    const url = `${this.baseUrl}/login`;
    return this.http.post<Usuario>(url, usuario).pipe(
      tap(token => {
        this.token = JSON.parse(JSON.stringify(token));
        const decode = jwt_decode(this.token) as UserToken;
        // console.log(this.token);
        this.cookieService.set('access-token', `${token}`, decode.exp);
        this.router.navigate(['/']);
        if (decode.role === 'admin') {
          this.mostrarMenu.emit(this.estaAutenticado());
          this.cookieService.set('eadm', decode.role);
        }
        if (decode.role === 'user') {
          this.mostrarMenu.emit(this.estaAutenticado());
        }

      }),
      catchError((err) => {
        return throwError(err);
      })
    )
      .subscribe();

  }

  public getToken(): string {
    return this.cookieService.get('access-token');
  }

  public decodePayloadJWT(token: string): Usuario {
    try {
      const decode = jwt_decode(token) as UserToken;
      return {
        id: decode.id,
        login: decode.name,
        role: decode.role,
        exp: decode.exp
      } as Usuario;
    } catch (Error) {
      return null;
    }
  }

  logout() {
    this.cookieService.delete('access-token');
    this.cookieService.delete('eadm');
    this.mostrarMenu.emit(false);
  }

  timeOut() {
    const decode = jwt_decode(this.token) as UserToken;
    setTimeout(() => {
      console.log('tempo de login expirado');
      this.logout();
      this.router.navigate(['login']);

    }, decode.exp);
  }
}
