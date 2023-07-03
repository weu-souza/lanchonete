import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
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

  public verificaToken(): Observable<UserToken> {
    // const apiUrl = `${this.baseUrl}/verifica-token`;
    // return this.http.get<UserToken>(apiUrl);
    try {
      return of(jwt_decode(this.getToken()) as UserToken);
    } catch (error) {
      this.logout();
    }
  }

  logar(usuario: Usuario) {
    const url = `${this.baseUrl}/login`;
    return this.http.post<Usuario>(url, usuario).pipe(
      tap(token => {
        this.token = JSON.parse(JSON.stringify(token));
        const decode = jwt_decode(this.token) as UserToken;
        // console.log(this.token);
        this.cookieService.set('access-token', `${token}`);
        if (decode.role.includes('admin')) {
          this.mostrarMenu.emit(this.estaAutenticado());
          this.cookieService.set('eadm', decode.role.find(role => role === 'admin'));
        }
        if (decode.role.includes('user')) {
          this.mostrarMenu.emit(this.estaAutenticado());
        }
        this.router.navigate(['produtos-categorias']);
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
    this.router.navigate(['login']);
  }
}
