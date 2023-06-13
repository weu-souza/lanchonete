import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Usuario} from '../classe/usuario';
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
      email: [this.usuario.email, [Validators.email, Validators.required]],
      senha: [this.usuario.senha, [Validators.required]]
    });
  }

  logar() {
    // apos fazer o http vou mudar
    if (this.authService.login(this.formLogin.value) && this.authService.login(this.formLogin.value)) {
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
