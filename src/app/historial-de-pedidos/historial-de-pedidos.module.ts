import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialDePedidosRoutingModule } from './historial-de-pedidos-routing.module';
import { HistorialDePedidosComponent } from './historial-de-pedidos.component';
import { HistorialMenuComponent } from './historial-menu/historial-menu.component';
import { FiltrarPedidosComponent } from './filtrar-pedidos/filtrar-pedidos.component';


@NgModule({
  declarations: [
    HistorialDePedidosComponent,
    HistorialMenuComponent,
    FiltrarPedidosComponent
  ],
  imports: [
    CommonModule,
    HistorialDePedidosRoutingModule
  ]
})
export class HistorialDePedidosModule { }
