import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';
import {Produto, Produtos} from '../adicionar-produto/produto';
import {ProdutoService} from '../adicionar-produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produtos: Produto[] = [];
  produto: Produto = new Produto();

  constructor(private route: Router, private authService: AuthService, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.getDataSelection().subscribe(produto => this.produtos = produto);
  }

  comprar() {
    // vou mudar pra buscar pelo id quando for fazer o http
    this.route.navigate(['comprar']);
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    this.produtoService.excluirProduto(this.produto.id);

  }

  atualizar() {

  }

}
