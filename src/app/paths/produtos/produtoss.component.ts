import {Component, OnInit} from '@angular/core';
import {Ingrediente} from '../models/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {ProdutoService} from '../service/produto.service';
import {CarrinhoService} from '../service/carrinho.service';

@Component({
  selector: 'app-produtoss',
  templateUrl: './produtoss.component.html',
  styleUrls: ['./produtoss.component.scss']
})
export class ProdutossComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produtos: Ingrediente[] = [];
  produto: Ingrediente = new Ingrediente();
  carrinho: Ingrediente;

  constructor(
    private route: Router,
    private authService: AuthService,
    private produtoService: ProdutoService,
    private carrinhoS: CarrinhoService) {
  }

  ngOnInit(): void {
    this.produtoService.obtemIngrediente().subscribe(produto => this.produtos = produto);

  }

  comprar() {
    // vou mudar pra buscar pelo id quando for fazer o http
    const produto: Ingrediente = {
      ...this.carrinho,
    };
    this.carrinhoS.adicionarAoCarrinho(produto);
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    this.produtoService.excluirIngredientes(this.produto.id);

  }

  atualizar() {

  }
}
