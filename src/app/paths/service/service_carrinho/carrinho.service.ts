import {Injectable} from '@angular/core';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Carrinho} from '../../models/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getCarrinho(): Observable<Carrinho[]> {
    const url = `${this.baseUrl}/chart`;
    return this.http.get<Carrinho[]>(url);
  }

  getCarrinhoByProductId(id: number) {
    const url = `${this.baseUrl}/chart/products/${id}`;
    return this.http.get<Ingrediente>(url);
  }

  getCarrinhoByOfferId(id: number) {
    const url = `${this.baseUrl}/chart/offer/${id}`;
    return this.http.get<Ingrediente>(url);
  }

  postCarrinho(carrinho: Carrinho, id: number) {
    const url = `${this.baseUrl}/chart/product/${id}`;
    return this.http.post<Carrinho>(url, carrinho);
  }

  postCarrinhoP(carrinho: Carrinho, id: number) {
    const url = `${this.baseUrl}/chart/offer/${id}`;
    return this.http.post<Carrinho>(url, carrinho);
  }


  deleteCarrinho(id: number) {
    const url = `${this.baseUrl}/chart/${id}`;
    return this.http.delete<number>(url);
  }

  comprarCarrinho() {
    const url = `${this.baseUrl}/chart`;
    return this.http.delete<void>(url);
  }
}
