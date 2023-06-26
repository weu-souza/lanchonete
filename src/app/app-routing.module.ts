import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromocoesComponent} from './paths/Main/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/Main/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/Main/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/Main/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/Main/carrinho/comprar.component';
import {LoginComponent} from './paths/login/login.component';
import {RegistroComponent} from './paths/login/registro/registro.component';
import {AuthGuard} from './paths/login/guard/auth.guard';
import {GuardAdmGuard} from './paths/login/guard/guard-adm.guard';
import {ProdutossComponent} from './paths/Main/produtos/produtoss.component';
import {AlterarProdutoComponent} from './paths/Main/alterar-produto/alterar-produto.component';
import {AlterarIngredienteComponent} from './paths/Main/alterar-ingrediente/alterar-ingrediente.component';


const routes: Routes = [{
  path: 'produtos-categorias/produtos/:id', component: ProdutossComponent, canActivate: [AuthGuard]
},

  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/Main/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule),
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
  {path: 'alterar_produto', component: AlterarProdutoComponent},
  {path: 'alterar_ingrediente', component: AlterarIngredienteComponent},
  {path: '**', component: NaoEncontradaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
