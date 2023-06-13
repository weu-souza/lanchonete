import {Injectable} from '@angular/core';
import {Ingrediente} from '../classe/produto';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho: Ingrediente[] = [];

  constructor() {
  }

  obtemCarrinho() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.carrinho;
  }

  adicionarAoCarrinho(carrinho: Ingrediente) {
    this.carrinho.push(carrinho);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  removerCarrinho(id: number) {
    this.carrinho = this.carrinho.filter(item => item.id !== id);
  }

  limparCarrinho() {
    this.carrinho = [];
    localStorage.clear();
  }
}
