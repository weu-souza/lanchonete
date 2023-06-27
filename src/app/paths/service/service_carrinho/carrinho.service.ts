import {Injectable} from '@angular/core';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  obtemCarrinho(): Observable<Ingrediente[]> {
    const url = `${this.baseUrl}/chart`;
    return this.http.get<Ingrediente[]>(url);
  }

  adicionarAoCarrinho(carrinho: Ingrediente) {
    const url = `${this.baseUrl}/chart`;
    return this.http.post<Ingrediente>(url, carrinho);
  }
  adicionarAoCarrinhoP(carrinho: Promocao) {
    const url = `${this.baseUrl}/chart`;
    return this.http.post<Promocao>(url, carrinho);
  }


  removerCarrinho(id: number) {
    const url = `${this.baseUrl}/chart${id}`;
    return this.http.delete<void>(url);
  }

  limparCarrinho() {

  }
}
