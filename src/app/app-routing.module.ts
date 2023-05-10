import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProdutosCategoriaModule} from './paths/produtos-categoria/produtos-categoria.module';
import {PromocoesComponent} from './paths/promocoes/promocoes.component';
import {ContatoComponent} from './paths/contato/contato.component';
import {HistoricoVendasComponent} from './paths/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import {AdicionarPromocaoComponent} from './paths/adicionar-promocao/adicionar-promocao.component';


const routes: Routes = [{path: 'produtos', loadChildren: () => import('./paths/produtos/produtos.module').then(m => m.ProdutosModule)},
  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule)
  },
  {path: '', redirectTo: 'produtos-categorias', pathMatch: 'full'},
  {path: 'promocoes', component: PromocoesComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'historico-vendas', component: HistoricoVendasComponent},
  {path: 'adicionar-ingredientes', component: AdicionarIngredienteComponent},
  {path: 'adicionar-promocao', component: AdicionarPromocaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
