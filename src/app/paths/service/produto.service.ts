import {Injectable} from '@angular/core';
import {Ingrediente, Produto, Produtos, ProdutosLista, Promocao, Promocoes} from '../models/produto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = ProdutosLista;
  ingredientes: Ingrediente[] = Produtos;
  promocoes: Promocao[] = Promocoes;

  constructor() {

  }

  postProduto(produtos: Ingrediente) {
    return this.ingredientes.push(produtos);
  }

  postProdutoLista(produtos: Produto) {
    return this.produtos.push(produtos);
  }

  postPromocoes(produtos: Promocao) {
    return this.promocoes.push(produtos);
  }

  excluirProdutoLista(id: number) {
    return this.produtos.filter(produto => produto.id !== id);
  }

  excluirIngredientes(id: number) {
    return this.ingredientes.filter(produto => produto.id !== id);
  }

  excluirPromocoes(id: number) {
    return this.promocoes.filter(produto => produto.id !== id);
  }

  getProdutosLista(): Observable<Produto[]> {
    return of(this.produtos);
  }

  getPromocoes(): Observable<Promocao[]> {
    return of(this.promocoes);
  }

  obtemIngrediente() {
    return of(this.ingredientes);
  }

}
