import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/service_login/auth.service';
import {Usuario} from '../models/usuario';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserToken} from '../models/user-token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  usuario: Usuario;
  user: UserToken;


  constructor(private route: Router, public authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.authService.timeOut();
  }

  createForm() {
    this.formLogin = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  logar() {
    if (this.formLogin.dirty && this.formLogin.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formLogin.value);
      // console.log(this.usuario);
      this.authService.logar(this.usuario);
      this.route.navigate(['/']);

    } else {
      alert('preencha o formulario!');
    }
  }

  registrar() {
    // apos fazer o http vou mudar
    this.route.navigate(['registrar']);
  }
}
