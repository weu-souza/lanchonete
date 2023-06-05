import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../login/usuario';

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
      email: [this.usuario.email, [Validators.email, Validators.required]],
      senha: [this.usuario.senha, [Validators.required]],
      nome: [this.usuario.nome, [Validators.minLength(4), Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  registrar() {
    console.log('registrar usuario', this.formRegistro.value);
  }

  registrarAdm() {
    console.log('registrarAdm', this.formRegistro.value);
  }
}
