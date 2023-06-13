import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromocoesComponent} from './paths/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/comprar/comprar.component';
import {LoginComponent} from './paths/login/login.component';
import {RegistroComponent} from './paths/registro/registro.component';
import {AuthGuard} from './paths/guard/auth.guard';
import {GuardAdmGuard} from './paths/guard/guard-adm.guard';


const routes: Routes = [{
  path: 'produtos',
  loadChildren: () => import('./paths/produtos/produtos.module').then(m => m.ProdutosModule),
  canActivate: [AuthGuard]
},
  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule),
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'produtos-categorias', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'promocoes', component: PromocoesComponent, canActivate: [AuthGuard]},
  {path: 'adicionar-produto', component: AdicionarProdutoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'historico-vendas', component: HistoricoVendasComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'adicionar-ingredientes', component: AdicionarIngredienteComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: '**', component: NaoEncontradaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
