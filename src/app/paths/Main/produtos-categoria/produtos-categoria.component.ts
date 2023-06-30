import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/service_login/auth.service';
import {Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {
  eAdm = this.authService.eadm();

  produto: Produto;
  produtos$: Observable<Produto[]>;
  produtos: Produto[];

  constructor(private authService: AuthService, private produtoService: ProdutoService, private route: Router) {
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtos$ = this.produtoService.getProdutosLista()
      .pipe(
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  adicionar(name: string) {
    this.route.navigateByUrl(`/adicionar-ingredientes/${name}`);
  }

  remover(id: number) {
    this.route.navigateByUrl(`/delete-produto/${id}`);
  }

  atualizar(id: number) {
    this.route.navigateByUrl(`/alterar/produto/${id}`);
  }

  irParaProdutos(name: string) {
    this.route.navigateByUrl(`produtos-categorias/${name}`);
  }
}
