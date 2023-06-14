import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  mostrarBtn = !this.authService.estaAutenticadoAdm();
  usuario: Usuario = new Usuario();
  formRegistro: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  createForm() {
    this.formRegistro = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]],
      nome: ['', [Validators.minLength(4), Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  registrar() {
    if (this.formRegistro.dirty && this.formRegistro.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
      console.log('registrar usuario', this.usuario);
      return;
    }
    alert('preencha o formulario!');

  }

  registrarAdm() {
    if (this.formRegistro.dirty && this.formRegistro.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
      console.log('registrarAdm', this.usuario);
      return;
    }
    alert('preencha o formulario!');
  }
}
