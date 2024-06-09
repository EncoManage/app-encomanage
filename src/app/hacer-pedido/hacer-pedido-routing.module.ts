import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HacerPedidoComponent } from './hacer-pedido.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SeleccionarEncomiendaComponent } from './seleccionar-encomienda/seleccionar-encomienda.component';
import { InstruccionesEntregaComponent } from './instrucciones-entrega/instrucciones-entrega.component';

const routes: Routes = [
  { path: '', component: HacerPedidoComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'seleccionar-encomienda', component: SeleccionarEncomiendaComponent },
  { path: 'instrucciones-entrega', component: InstruccionesEntregaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HacerPedidoRoutingModule { }
