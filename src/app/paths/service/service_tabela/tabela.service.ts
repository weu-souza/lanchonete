import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Ingrediente} from '../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getTabela() {

  }

  postTabela(produtos: Ingrediente) {

  }

}
