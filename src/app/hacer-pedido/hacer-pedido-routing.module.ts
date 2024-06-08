import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HacerPedidoComponent } from './hacer-pedido.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  { path: '', component: HacerPedidoComponent },
  { path: 'create-order', component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HacerPedidoRoutingModule { }
