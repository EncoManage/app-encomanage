import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialDePedidosComponent } from './historial-de-pedidos.component';
import { HistorialMenuComponent } from './historial-menu/historial-menu.component';
import { FiltrarPedidosComponent } from './filtrar-pedidos/filtrar-pedidos.component';
import { ListaActualizadaComponent } from './lista-actualizada/lista-actualizada.component';
import { ListaDeEnviosComponent } from './lista-de-envios/lista-de-envios.component';
import { DetallesDelEnvioComponent } from './detalles-del-envio/detalles-del-envio.component';

const routes: Routes = [
  { path: '', component: HistorialDePedidosComponent },
  { path: 'historial-menu', component: HistorialMenuComponent },
  { path: 'filtrar-pedidos', component: FiltrarPedidosComponent },
  { path: 'lista-actualizada', component: ListaActualizadaComponent},
  { path: 'lista-de-envios', component: ListaDeEnviosComponent},
  {path: 'detalles-del-envio', component: DetallesDelEnvioComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialDePedidosRoutingModule { }
