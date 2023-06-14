import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Ingrediente, Produto} from '../models/produto';
import {ProdutoService} from '../service/produto.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produto: Produto = new Produto();
  produtos: Produto[];

  constructor(private authService: AuthService, private produtoService: ProdutoService, private route: Router) {
  }

  ngOnInit(): void {
    this.produtoService.getProdutosLista().subscribe(produto => this.produtos = produto);
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    this.produtoService.excluirProdutoLista(this.produto.id);
  }

  atualizar() {

  }

  irParaProdutos(id: number) {
    this.route.navigateByUrl(`produtos-categorias/produtos/${id}`);
  }
}
