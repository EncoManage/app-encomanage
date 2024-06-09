import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacerPedidoRoutingModule } from './hacer-pedido-routing.module';
import { HacerPedidoComponent } from './hacer-pedido.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SeleccionarEncomiendaComponent } from './seleccionar-encomienda/seleccionar-encomienda.component';
import { InstruccionesEntregaComponent } from './instrucciones-entrega/instrucciones-entrega.component';


@NgModule({
  declarations: [
    HacerPedidoComponent,
    CreateOrderComponent,
    SeleccionarEncomiendaComponent,
    InstruccionesEntregaComponent
  ],
  imports: [
    CommonModule,
    HacerPedidoRoutingModule,
    FormsModule
  ]
})
export class HacerPedidoModule { }
