import {Injectable} from '@angular/core';
import {Produto, Produtos} from './produto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = Produtos;

  constructor() {

  }

  postProduto(produtos: Produto) {
    return this.produtos.push(produtos);
  }

  excluirProduto(id: number) {
    return this.produtos.filter(produto => produto.id !== id);
  }

  getDataSelection(): Observable<Produto[]> {
    return of(this.produtos);
  }

}
