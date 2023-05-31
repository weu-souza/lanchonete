import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Usuario} from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();


  constructor(private route: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logar() {
    // apos fazer o http vou mudar
    if (this.authService.login(this.usuario) && this.authService.login(this.usuario)) {
      this.route.navigate(['/']);
      return;
    }
    alert('usuario incorreto!');
    this.usuario.email = '';
    this.usuario.senha = '';
  }

  registrar() {
    // apos fazer o http vou mudar
    this.route.navigate(['registrar']);
  }
}
