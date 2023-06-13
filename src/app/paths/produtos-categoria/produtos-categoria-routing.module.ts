import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosCategoriaComponent } from './produtos-categoria.component';
import {ProdutosComponent} from '../produtos/produtos.component';

const routes: Routes = [{ path: '', component: ProdutosCategoriaComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosCategoriaRoutingModule { }
