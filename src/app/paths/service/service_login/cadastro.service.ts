import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Ingrediente} from '../../models/produto';
import {Usuario} from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl: string = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {
  }

  getLogin() {
    const url = `${this.baseUrl}/user/info`;
    return this.http.get<Usuario>(url);
  }

  postLogin(usuario: Usuario) {
    const url = `${this.baseUrl}/user`;
    return this.http.post<Ingrediente>(url, usuario);
  }

  postLoginAdm(adm: Usuario) {
    const url = `${this.baseUrl}/user/admin`;
    return this.http.post<Ingrediente>(url, adm);
  }

}
