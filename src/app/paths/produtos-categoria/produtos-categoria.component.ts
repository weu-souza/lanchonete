import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Produto} from '../adicionar-produto/produto';
import {ProdutoService} from '../adicionar-produto/produto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produto: Produto[];

  constructor(private authService: AuthService, private produtoService: ProdutoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  remover() {

  }

  atualizar() {

  }
}
