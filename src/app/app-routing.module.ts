import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path:'home',component:HomeComponent},
 { path: 'hacer-pedido', loadChildren: () => import('./hacer-pedido/hacer-pedido.module').then(m => m.HacerPedidoModule) },
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'historial-de-pedidos', loadChildren: () => import('./historial-de-pedidos/historial-de-pedidos.module').then(m => m.HistorialDePedidosModule) } , // Redirecciona a 'home' cuando la ruta está vacía
 //{ path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 { path: 'menus', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) }  // Redirecciona a 'home' cuando la ruta está vacía

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
