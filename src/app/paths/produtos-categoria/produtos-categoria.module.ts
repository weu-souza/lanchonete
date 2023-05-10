import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosCategoriaRoutingModule } from './produtos-categoria-routing.module';
import { ProdutosCategoriaComponent } from './produtos-categoria.component';


@NgModule({
  declarations: [ProdutosCategoriaComponent],
  imports: [
    CommonModule,
    ProdutosCategoriaRoutingModule
  ]
})
export class ProdutosCategoriaModule { }
