import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromocoesComponent} from './paths/Main/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/Main/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/Main/carrinho/comprar.component';
import {LoginComponent} from './paths/login/login.component';
import {RegistroComponent} from './paths/login/registro/registro.component';
import {AuthGuard} from './paths/login/guard/auth.guard';
import {GuardAdmGuard} from './paths/login/guard/admGuard/guard-adm.guard';
import {ProdutossComponent} from './paths/Main/produtos/produtoss.component';
import {AlterarProdutoComponent} from './paths/alterar/alterar-produto/alterar-produto.component';
import {AlterarIngredienteComponent} from './paths/alterar/alterar-ingrediente/alterar-ingrediente.component';
import {AdicionarPromocaoComponent} from './paths/adicionar/adicionar-promocao/adicionar-promocao.component';
import {DeleteProdutoComponent} from './paths/deletar/delete-produto/delete-produto.component';
import {DeleteIngredienteComponent} from './paths/deletar/delete-ingrediente/delete-ingrediente.component';
import {DeletePromocaoComponent} from './paths/deletar/delete-promocao/delete-promocao.component';
import {AlterarPromocaoComponent} from './paths/alterar/alterar-promocao/alterar-promocao.component';
import {AdicionarCarrinhProdutoComponent} from './paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component';
import {AdicionarCarrinhPrmocaoComponent} from './paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component';



const routes: Routes = [{
  path: 'produtos-categorias/produtos/:name', component: ProdutossComponent, canActivate: [AuthGuard]
},

  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/Main/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule),
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'produtos-categorias', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'promocoes', component: PromocoesComponent, canActivate: [AuthGuard]},
  {path: 'adicionar-produto', component: AdicionarProdutoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'adicionar-promocao', component: AdicionarPromocaoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'adicionar-carrinho_produto/:id', component: AdicionarCarrinhProdutoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'adicionar-carrinho_promocao/:id', component: AdicionarCarrinhPrmocaoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'historico-vendas', component: HistoricoVendasComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'adicionar-ingredientes/:name', component: AdicionarIngredienteComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'delete-produto/:id', component: DeleteProdutoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'delete-ingrediente/:id', component: DeleteIngredienteComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'delete-promocao/:id', component: DeletePromocaoComponent, canActivate: [GuardAdmGuard, AuthGuard]},
  {path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'alterar_produto/:id', component: AlterarProdutoComponent},
  {path: 'alterar_ingrediente:id', component: AlterarIngredienteComponent},
  {path: 'alterar_promocao/:id', component: AlterarPromocaoComponent},
  {path: '**', component: NaoEncontradaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
