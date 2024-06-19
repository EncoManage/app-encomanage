import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialDePedidosRoutingModule } from './historial-de-pedidos-routing.module';
import { HistorialDePedidosComponent } from './historial-de-pedidos.component';
import { HistorialMenuComponent } from './historial-menu/historial-menu.component';
import { FiltrarPedidosComponent } from './filtrar-pedidos/filtrar-pedidos.component';
import { ListaActualizadaComponent } from './lista-actualizada/lista-actualizada.component';
import { ListaDeEnviosComponent } from './lista-de-envios/lista-de-envios.component';
import { DetallesDelEnvioComponent } from './detalles-del-envio/detalles-del-envio.component';


@NgModule({
  declarations: [
    HistorialDePedidosComponent,
    HistorialMenuComponent,
    FiltrarPedidosComponent,
    ListaActualizadaComponent,
    ListaDeEnviosComponent,
    DetallesDelEnvioComponent
  ],
  imports: [
    CommonModule,
    HistorialDePedidosRoutingModule
  ]
})
export class HistorialDePedidosModule { }
