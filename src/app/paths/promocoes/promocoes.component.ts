import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {ProdutoService} from '../service/produto.service';
import {Ingrediente, Promocao,} from '../models/produto';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produtos: Promocao[] = [];
  produto: Promocao = new Promocao();

  constructor(private route: Router, private authService: AuthService, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.getPromocoes().subscribe(produto => this.produtos = produto);
  }

  comprar() {
    // vou mudar pra buscar pelo id quando for fazer o http
    this.route.navigate(['comprar']);
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    this.produtoService.excluirPromocoes(this.produto.id);
  }

  atualizar() {

  }
}
