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
import { ContatoComponent } from './paths/contato/contato.component';
import { HistoricoVendasComponent } from './paths/historico-vendas/historico-vendas.component';
import { AdicionarIngredienteComponent } from './paths/adicionar-ingrediente/adicionar-ingrediente.component';
import { AdicionarPromocaoComponent } from './paths/adicionar-promocao/adicionar-promocao.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PedidosComponent,
    RegistroComponent,
    PromocoesComponent,
    ContatoComponent,
    HistoricoVendasComponent,
    AdicionarIngredienteComponent,
    AdicionarPromocaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
