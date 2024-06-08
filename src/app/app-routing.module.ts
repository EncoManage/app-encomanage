import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'home',component:HomeComponent},
 { path: 'hacer-pedido', loadChildren: () => import('./hacer-pedido/hacer-pedido.module').then(m => m.HacerPedidoModule) },
 { path: '', redirectTo: '/home', pathMatch: 'full' }  // Redirecciona a 'home' cuando la ruta está vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
