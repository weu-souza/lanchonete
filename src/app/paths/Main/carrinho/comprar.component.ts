import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Carrinho} from '../../models/carrinho';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss'],
})
export class ComprarComponent implements OnInit {
  produto: Carrinho[] = [];
  produtos$: Observable<Carrinho[]>;
  total = 0;

  constructor(private route: Router, private carrinhoService: CarrinhoService) {
  }

  ngOnInit(): void {
    this.getCarrinho();
  }

  getCarrinho() {
    this.produtos$ = this.carrinhoService.getCarrinho()
      .pipe(
        tap(produto => {
          this.produto = produto;
          this.calculaTotal();
        }),
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  calculaTotal() {
    this.total = this.produto.reduce((prev, curr) => prev + (curr.price), 0);
    console.log('total', this.total);
  }

  removeProdutoCarrinho(id: number) {
    this.carrinhoService.deleteCarrinho(id).pipe(
      tap(
        res => {
          this.produto = this.produto.filter(produto => produto.id !== res);
          this.produtos$ = of(this.produto);
          alert('removido');
          this.calculaTotal();
        }
      )
    ).subscribe();
  }

  comprar() {
    if (this.produto.length > 0) {
      alert('parabéns, você finalizou a sua compra!');
    } else {
      alert('carrinho vazio');
    }
  }

}
