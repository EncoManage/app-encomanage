import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HacerPedidoModule } from './hacer-pedido/hacer-pedido.module';
import { HistorialDePedidosModule } from './historial-de-pedidos/historial-de-pedidos.module';
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HacerPedidoModule,
    FormsModule,

    HttpClientModule,

    HistorialDePedidosModule,

  ],
  providers: [
    provideAnimationsAsync(),
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
