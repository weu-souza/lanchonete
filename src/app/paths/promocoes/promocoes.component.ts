import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';
import {ProdutoService} from '../adicionar-produto/produto.service';
import {Produto} from '../adicionar-produto/produto';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
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
