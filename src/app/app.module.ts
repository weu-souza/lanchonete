import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './paths/template/header/header.component';
import {FooterComponent} from './paths/template/footer/footer.component';
import {LoginComponent} from './paths/login/login.component';
import {RegistroComponent} from './paths/login/registro/registro.component';
import {PromocoesComponent} from './paths/Main/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/Main/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/Main/carrinho/comprar.component';
import {AuthService} from './paths/service/service_login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NaoLogadoComponent} from './paths/login/nao-logado/nao-logado.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProdutossComponent} from './paths/Main/produtos/produtoss.component';
import {AlterarProdutoComponent} from './paths/alterar/alterar-produto/alterar-produto.component';
import {AlterarIngredienteComponent} from './paths/alterar/alterar-ingrediente/alterar-ingrediente.component';
import {TokenInterceptor} from './paths/login/interceptors/token.interceptor';
import { AdicionarPromocaoComponent } from './paths/adicionar/adicionar-promocao/adicionar-promocao.component';
import { DeleteProdutoComponent } from './paths/deletar/delete-produto/delete-produto.component';
import { AlterarPromocaoComponent } from './paths/alterar/alterar-promocao/alterar-promocao.component';
import { DeleteIngredienteComponent } from './paths/deletar/delete-ingrediente/delete-ingrediente.component';
import { DeletePromocaoComponent } from './paths/deletar/delete-promocao/delete-promocao.component';
import { AdicionarCarrinhProdutoComponent } from './paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component';
import { AdicionarCarrinhPrmocaoComponent } from './paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    PromocoesComponent,
    AdicionarProdutoComponent,
    HistoricoVendasComponent,
    AdicionarIngredienteComponent,
    NaoEncontradaComponent,
    ComprarComponent,
    NaoLogadoComponent,
    ProdutossComponent,
    AlterarProdutoComponent,
    AlterarIngredienteComponent,
    AdicionarPromocaoComponent,
    DeleteProdutoComponent,
    AlterarPromocaoComponent,
    DeleteIngredienteComponent,
    DeletePromocaoComponent,
    AdicionarCarrinhProdutoComponent,
    AdicionarCarrinhPrmocaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
