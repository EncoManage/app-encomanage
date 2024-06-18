import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialDePedidosComponent } from './historial-de-pedidos.component';

const routes: Routes = [
  { path: '', component: HistorialDePedidosComponent },
  { path: 'historial-menu', component: HistorialDePedidosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialDePedidosRoutingModule { }
