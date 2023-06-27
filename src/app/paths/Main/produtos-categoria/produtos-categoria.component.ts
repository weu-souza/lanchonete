import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/service_login/auth.service';
import {Ingrediente, Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {
  eAdm = this.authService.estaAutenticado();

  produto: Produto;
  produtos$: Observable<Produto[]>;

  constructor(private authService: AuthService, private produtoService: ProdutoService, private route: Router) {
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    console.log(this.produtos$);
    this.produtos$ = this.produtoService.getProdutosLista()
      .pipe(
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  remover(id: number) {
    this.produtoService.deleteProdutoLista(this.produto.id).subscribe(res => {
      alert('deletado com sucesso');
    }, err => {
      console.log(err.message);
    });
  }

  atualizar() {
  this.route.navigate(['alterar_produto']);
  }

  irParaProdutos(id: number) {
    this.route.navigateByUrl(`produtos-categorias/produtos/${id}`);
  }
}
