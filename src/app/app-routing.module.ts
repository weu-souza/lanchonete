import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromocoesComponent} from './paths/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';


const routes: Routes = [{path: 'produtos', loadChildren: () => import('./paths/produtos/produtos.module').then(m => m.ProdutosModule)},
  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule)
  },
  {path: '', redirectTo: 'produtos-categorias', pathMatch: 'full'},
  {path: 'promocoes', component: PromocoesComponent},
  {path: 'adicionar-produto', component: AdicionarProdutoComponent},
  {path: 'historico-vendas', component: HistoricoVendasComponent},
  {path: 'adicionar-ingredientes', component: AdicionarIngredienteComponent},
  {path: '**', component: NaoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
