import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromocoesComponent} from './paths/Main/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar/adicionar-produto/adicionar-produto.component';
import {AdicionarIngredienteComponent} from './paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/shared/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/Main/carrinho/comprar.component';
import {LoginComponent} from './paths/login/login.component';
import {RegistroComponent} from './paths/login/registro/registro.component';
import {AuthGuard} from './paths/shared/guard/auth.guard';
import {ProdutossComponent} from './paths/Main/produtos/produtoss.component';
import {AlterarProdutoComponent} from './paths/alterar/alterar-produto/alterar-produto.component';
import {AlterarIngredienteComponent} from './paths/alterar/alterar-ingrediente/alterar-ingrediente.component';
import {AdicionarPromocaoComponent} from './paths/adicionar/adicionar-promocao/adicionar-promocao.component';
import {DeleteProdutoComponent} from './paths/deletar/delete-produto/delete-produto.component';
import {DeleteIngredienteComponent} from './paths/deletar/delete-ingrediente/delete-ingrediente.component';
import {DeletePromocaoComponent} from './paths/deletar/delete-promocao/delete-promocao.component';
import {AlterarPromocaoComponent} from './paths/alterar/alterar-promocao/alterar-promocao.component';
import {
  AdicionarCarrinhProdutoComponent
} from './paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component';
import {
  AdicionarCarrinhPrmocaoComponent
} from './paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component';
import {UnauthorizedPageComponent} from './paths/shared/unauthorized-page/unauthorized-page.component';
import {AuthService} from './paths/service/service_login/auth.service';


const routes: Routes = [{
  path: 'produtos-categorias/:name/produtos', component: ProdutossComponent, canActivate: [AuthGuard],
  data: {
    role: ['admin', 'user']
  }
},

  {
    path: 'produtos-categorias',
    loadChildren: () => import('./paths/Main/produtos-categoria/produtos-categoria.module').then(m => m.ProdutosCategoriaModule),
    canActivate: [AuthGuard],
    data: {
      role: ['admin', 'user']
    }
  },
  {
    path: '', redirectTo: 'produtos-categorias', pathMatch: 'full'
  },
  {
    path: 'promocoes', component: PromocoesComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin', 'user']
    }
  },
  {
    path: 'adicionar-produto', component: AdicionarProdutoComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }
  },
  {
    path: 'adicionar-promocao', component: AdicionarPromocaoComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }
  },
  {
    path: 'adicionar-carrinho-produto/:id',
    component: AdicionarCarrinhProdutoComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['admin', 'user']
    }
  },
  {
    path: 'adicionar-carrinho-promocao/:id',
    component: AdicionarCarrinhPrmocaoComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['admin', 'user']
    }

  },
  {
    path: 'adicionar-ingredientes/:name',
    component: AdicionarIngredienteComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }
  },
  {
    path: 'delete-produto/:id', component: DeleteProdutoComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }
  },
  {
    path: 'delete-ingrediente/:id', component: DeleteIngredienteComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }
  },
  {
    path: 'delete-promocao/:id', component: DeletePromocaoComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin']
    }

  },
  {
    path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard],
    data: {
      role: ['admin', 'user']
    }
  },
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistroComponent},
  {
    path: 'alterar',
    children: [
      {
        path: 'produto/:id', component: AlterarProdutoComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['admin']
        }
      },
      {
        path: 'ingrediente/:id', component: AlterarIngredienteComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['admin']
        }
      },
      {
        path: 'promocao/:id', component: AlterarPromocaoComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['admin']
        }
      },
    ]
  },

  {path: 'unauthorized', component: UnauthorizedPageComponent},
  {path: '**', component: NaoEncontradaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
