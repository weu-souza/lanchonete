import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Usuario} from '../models/usuario';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  usuario: Usuario = new Usuario();


  constructor(private route: Router, public authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  logar() {
    // apos fazer o http vou mudar
    if (this.formLogin.dirty && this.formLogin.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formLogin.value);
      if (this.authService.login(this.usuario) ) {
        this.route.navigate(['/']);
        return;
      }
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
