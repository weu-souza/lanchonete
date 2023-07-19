import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/service_login/auth.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../models/usuario';
import {CadastroService} from '../../service/service_login/cadastro.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar = false;
  eAdm = this.authService.eadm();
  formBuscarProduto: FormGroup;
  name: string;

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


  constructor(private route: Router, private authService: AuthService, private fb: FormBuilder, private cadastroService: CadastroService) {
  }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.eAdm = mostrar
    );
    this.createForm();
    this.nome();
  }

// mudar apos o http
  nome() {
    this.cadastroService.getLogin().subscribe(res => {
      this.name = res.name;
    });
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
