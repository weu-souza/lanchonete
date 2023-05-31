import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  remover() {

  }

  atualizar() {

  }
}
