import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HacerPedidoRoutingModule } from './hacer-pedido-routing.module';
import { HacerPedidoComponent } from './hacer-pedido.component';
import { CreateOrderComponent } from './create-order/create-order.component';


@NgModule({
  declarations: [
    HacerPedidoComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    HacerPedidoRoutingModule
  ]
})
export class HacerPedidoModule { }
