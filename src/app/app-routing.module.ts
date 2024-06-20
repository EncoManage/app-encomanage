import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './user/helpers/admin.guard';

const routes: Routes = [
 { path:'home',component:HomeComponent},
 { path: 'hacer-pedido', loadChildren: () => import('./hacer-pedido/hacer-pedido.module').then(m => m.HacerPedidoModule), canActivate: [authGuard] },
 //{ path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 { path: 'menus', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule), canActivate: [authGuard] },
 { path: 'mensajes', loadChildren: () => import('./mensajes/mensajes.module').then(m => m.MensajesModule), canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
