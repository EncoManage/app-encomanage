import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialDePedidosComponent } from './historial-de-pedidos.component';
import { HistorialMenuComponent } from './historial-menu/historial-menu.component';
import { FiltrarPedidosComponent } from './filtrar-pedidos/filtrar-pedidos.component';

const routes: Routes = [
  { path: '', component: HistorialDePedidosComponent },
  { path: 'historial-menu', component: HistorialMenuComponent },
  { path: 'filtrar-pedidos', component: FiltrarPedidosComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialDePedidosRoutingModule { }
