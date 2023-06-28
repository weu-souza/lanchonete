import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/service_login/auth.service';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Promocao} from '../../models/produto';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  eAdm = this.authService.estaAutenticado();
  produtos$: Observable<Promocao[]>;
  produto: Promocao = new Promocao();

  constructor(private route: Router, private authService: AuthService, private produtoService: ProdutoService,
              private carrinhoS: CarrinhoService) {
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
    this.carrinhoS.adicionarAoCarrinhoP(this.produto).subscribe(res => {
      this.route.navigate(['carrinho']);
      alert('enviado com sucesso!');
    });
  }

  remover(id: number) {
    this.route.navigateByUrl(`/delete-promocao/${id}`);
  }

  atualizar(id: number) {
    this.route.navigateByUrl(`/alterar_promocao/${id}`);
  }
}
