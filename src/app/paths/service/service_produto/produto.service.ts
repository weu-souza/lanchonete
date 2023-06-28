import {Injectable} from '@angular/core';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Usuario} from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl: string = environment.baseUrl;
  produtos: Produto[] = [];
  ingredientes: Ingrediente[] = [];
  promocoes: Promocao[] = [];

  constructor(private http: HttpClient) {

  }

  postProduto(produtos: Ingrediente, name: string) {
    const url = `${this.baseUrl}/products${name}`;
    return this.http.post<Ingrediente>(url, produtos);
  }

  postProdutoLista(produtos: Produto) {
    const url = `${this.baseUrl}/categories`;
    return this.http.post<Produto>(url, produtos);
  }

  postPromocoes(produtos: Promocao) {
    const url = `${this.baseUrl}/offers`;
    return this.http.post<Promocao>(url, produtos);
  }

  getProdutoById(id: number) {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.get<Produto>(url);
  }

  getIngredienteById(id: number) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Ingrediente>(url);
  }

  getPromocaoById(id: number) {
    const url = `${this.baseUrl}/offers${id}`;
    return this.http.get<Promocao>(url);
  }

  getProdutosLista(): Observable<Produto[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Produto[]>(url);
  }

  getPromocoes(): Observable<Promocao[]> {
    const url = `${this.baseUrl}/offers/`;
    return this.http.get<Promocao[]>(url);
  }

  getIngrediente(name: string): Observable<Ingrediente[]> {
    const url = `${this.baseUrl}/products/${name}`;
    return this.http.get<Ingrediente[]>(url);
  }

  deleteProdutoLista(id: number) {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.delete<void>(url);
  }

  deleteIngredientes(id: number) {
    return this.ingredientes.filter(produto => produto.id !== id);
  }

  deletePromocoes(id: number) {
    return this.promocoes.filter(produto => produto.id !== id);
  }


}
