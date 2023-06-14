import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../models/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar = false;
  eAdm = this.authService.estaAutenticadoAdm();
  formBuscarProduto: FormGroup;
  usuario: Usuario;

  aparecerMenu() {
    const btn: HTMLElement = document.getElementById('btn-mobile') as HTMLElement;
    if (!this.mudar) {
      btn.innerHTML = '<i class="fa-solid fa-xmark p-1" ></i>';
      this.mudar = true;
    } else {
      btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
      this.mudar = false;
    }
  }

  // mudar apos o http
  nome() {
    if (this.eAdm) {
      return 'Adm';
    }
    return 'weu';
  }

  constructor(private route: Router, private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.eAdm = mostrar
    );
    this.createForm();
  }

  createForm() {
    this.formBuscarProduto = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }


  sair() {
    alert('saindo...');
    this.authService.logout();
    this.route.navigate(['login']);
  }

  sumirMenu() {
    const btn: HTMLElement = document.getElementById('btn-mobile') as HTMLElement;
    if (this.mudar) {
      btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
      this.mudar = false;
    }
  }

}
