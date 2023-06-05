import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './paths/header/header.component';
import {FooterComponent} from './paths/footer/footer.component';
import {LoginComponent} from './paths/login/login.component';
import {PedidosComponent} from './paths/pedidos/pedidos.component';
import {RegistroComponent} from './paths/registro/registro.component';
import {PromocoesComponent} from './paths/promocoes/promocoes.component';
import {AdicionarProdutoComponent} from './paths/adicionar-produto/adicionar-produto.component';
import {HistoricoVendasComponent} from './paths/historico-vendas/historico-vendas.component';
import {AdicionarIngredienteComponent} from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import {NaoEncontradaComponent} from './paths/nao-encontrada/nao-encontrada.component';
import {ComprarComponent} from './paths/comprar/comprar.component';
import {AuthService} from './paths/login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NaoLogadoComponent} from './paths/nao-logado/nao-logado.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PedidosComponent,
    RegistroComponent,
    PromocoesComponent,
    AdicionarProdutoComponent,
    HistoricoVendasComponent,
    AdicionarIngredienteComponent,
    NaoEncontradaComponent,
    ComprarComponent,
    NaoLogadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
