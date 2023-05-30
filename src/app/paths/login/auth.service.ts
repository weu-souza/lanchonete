import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from './usuario';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  accessTokenAdm = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh';
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem('access-token');
  }
  estaAutenticadoAdm(): boolean {
    return !!sessionStorage.getItem('access-tokenAdm');
  }

  login(usuario: Usuario): boolean {
    if (usuario.email === 'adm@email.com' && usuario.senha === '123') {
      sessionStorage.setItem('access-token', this.accessTokenAdm);
      this.mostrarMenu.emit(true);
      return true;
    }
    if (usuario.email === 'weu@email.com' && usuario.senha === '123') {
      sessionStorage.setItem('access-token', this.accessToken);
      this.mostrarMenu.emit(true);
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.mostrarMenu.emit(false);
  }
}
