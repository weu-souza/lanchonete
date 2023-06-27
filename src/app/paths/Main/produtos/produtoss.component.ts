import {Component, OnInit} from '@angular/core';
import {Ingrediente, Produto} from '../../models/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/service_login/auth.service';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-produtoss',
  templateUrl: './produtoss.component.html',
  styleUrls: ['./produtoss.component.scss']
})
export class ProdutossComponent implements OnInit {
  eAdm = this.authService.estaAutenticado();
  produtos: Ingrediente;
  produtos$: Observable<Ingrediente>;
  // produtos: Ingrediente[] = [];
  id = 1;

  constructor(
    private route: Router,
    private authService: AuthService,
    private produtoService: ProdutoService,
    private carrinhoS: CarrinhoService) {
  }

  ngOnInit(): void {
    this.getIngredientes(this.id);
  }

  getIngredientes(id: number) {
    this.produtos$ =
      this.produtoService.getIngrediente(id).pipe(
        catchError(error => {
          // this.route.navigateByUrl('/error');
          // alert('Problemas no server tente novamente mais tarde.');
          return throwError(error);
        })
      );
  }

  comprar() {
    this.carrinhoS.adicionarAoCarrinho(this.produtos).subscribe(res => {
      this.route.navigate(['carrinho']);
      alert('enviado com sucesso!');
    });
  }

  remover(id: number) {


  }

  atualizar() {
    this.route.navigate(['alterar_ingrediente']);
  }
}
