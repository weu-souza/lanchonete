import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/service_login/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../models/usuario';
import {CadastroService} from '../../service/service_login/cadastro.service';
import {errorObject} from 'rxjs/internal-compatibility';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  mostrarBtn = !this.authService.estaAutenticado();
  usuario: Usuario = new Usuario();
  formRegistro: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private cadastroService: CadastroService) {
  }

  createForm() {
    this.formRegistro = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.minLength(4), Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  registrar() {
    if (this.formRegistro.dirty && this.formRegistro.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
      this.cadastroService.postLogin(this.usuario).subscribe(res => {
        alert('enviado com sucesso!');
      });
      console.log('registrar usuario', this.usuario);
      return;
    }
    alert('preencha o formulario!');

  }

  registrarAdm() {
    if (this.formRegistro.dirty && this.formRegistro.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
      this.cadastroService.postLoginAdm(this.usuario).subscribe(res => {
        alert('enviado com sucesso!');
      });
      console.log('registrarAdm', this.usuario);
      return;
    }
    alert('preencha o formulario!');
  }
}
