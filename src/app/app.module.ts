import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './paths/header/header.component';
import { FooterComponent } from './paths/footer/footer.component';
import { LoginComponent } from './paths/login/login.component';
import { PedidosComponent } from './paths/pedidos/pedidos.component';
import { RegistroComponent } from './paths/registro/registro.component';
import { PromocoesComponent } from './paths/promocoes/promocoes.component';
import { AdicionarProdutoComponent } from './paths/adicionar-produto/adicionar-produto.component';
import { HistoricoVendasComponent } from './paths/historico-vendas/historico-vendas.component';
import { AdicionarIngredienteComponent } from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import { NaoEncontradaComponent } from './paths/nao-encontrada/nao-encontrada.component';
import { ComprarComponent } from './paths/comprar/comprar.component';




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
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
