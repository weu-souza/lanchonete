import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/service_login/auth.service';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Promocao} from '../../models/produto';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();
  produtos$: Observable<Promocao[]>;
  produto: Promocao = new Promocao();

  constructor(private route: Router, private authService: AuthService, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.getPromocoes();
  }

  getPromocoes() {
    this.produtos$ = this.produtoService.getPromocoes().pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  comprar() {
    // vou mudar pra buscar pelo id quando for fazer o http
    this.route.navigate(['comprar']);
  }

  remover(id: number) {
    // this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    this.produtoService.deletePromocoes(this.produto.id);
  }

  atualizar() {
    this.route.navigate(['alterar_ingrediente']);
  }
}
