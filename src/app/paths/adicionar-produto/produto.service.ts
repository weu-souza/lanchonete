import {Injectable} from '@angular/core';
import {Produto} from './produto';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private dataSource = new BehaviorSubject(new Produto());
  data = this.dataSource.asObservable();

  constructor() {

  }

  updateDataSelection(produtos: Produto) {
this.dataSource.next(produtos);
  }

}
