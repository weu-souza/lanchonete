import {Injectable} from '@angular/core';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

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

  // metodo post
  // post pra tabela de produtos
  postProduto(produtos: Ingrediente, name: string) {
    const url = `${this.baseUrl}/products/${name}`;
    return this.http.post<Ingrediente>(url, produtos);
  }

  // post pra tabela de categoria
  postProdutoLista(produtos: Produto) {
    const url = `${this.baseUrl}/categories`;
    return this.http.post<Produto>(url, produtos);
  }

  // post pra tabela de promocoes
  postPromocoes(produtos: Promocao) {
    const url = `${this.baseUrl}/offers`;
    return this.http.post<Promocao>(url, produtos);
  }

  // metodo get by id
  // get by id pra tabela categorias
  getProdutoById(id: number) {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.get<Produto>(url);
  }

  // get by id pra tabela de produtos
  getIngredienteById(id: number) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Ingrediente>(url);
  }

  // get by id pra tabela de promocoes
  getPromocaoById(id: number) {
    const url = `${this.baseUrl}/offers/${id}`;
    return this.http.get<Promocao>(url);
  }

  getIngredientesByCategory(name: string) {
    const url = `${this.baseUrl}/products/${name}`;
    return this.http.get<Ingrediente[]>(url);
  }

  // metodo get
  // get todos de categorias
  getProdutosLista(): Observable<Produto[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Produto[]>(url);
  }

  // get all de promocoes
  getPromocoes(): Observable<Promocao[]> {
    const url = `${this.baseUrl}/offers/`;
    return this.http.get<Promocao[]>(url);
  }

  // get all de ingredientes
  getIngrediente(): Observable<Ingrediente[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<Ingrediente[]>(url);
  }

  // metodo delete
  // delete de categorias
  deleteProdutoLista(id: number) {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.delete<void>(url);
  }

  // delete de produtos
  deleteIngredientes(id: number) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete<void>(url);
  }

  // delete de promocoes
  deletePromocoes(id: number) {
    const url = `${this.baseUrl}/offers/${id}`;
    return this.http.delete<void>(url);
  }

  // metodo put
  // put de categorias
  putProdutosLista(produtos: Produto) {
    const url = `${this.baseUrl}/categories/${produtos.id}`;
    return this.http.put<void>(url, produtos);
  }

  // put de produtos
  putProdutos(produtos: Ingrediente) {
    const url = `${this.baseUrl}/products/${produtos.id}`;
    return this.http.put<void>(url, produtos);
  }

  // put de promocoes
  putPromocoes(produtos: Promocao) {
    const url = `${this.baseUrl}/offers/${produtos.id}`;
    return this.http.put<void>(url, produtos);
  }


}
