import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Ingrediente} from '../classe/produto';
import {ProdutoService} from '../service/produto.service';
import {CarrinhoService} from '../service/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produtos: Ingrediente[] = [];
  produto: Ingrediente ;
  carrinho: Ingrediente | null;

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
