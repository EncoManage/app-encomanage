import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  { path: '', component: MenusComponent },
  { path: 'consumidor', component: ConsumidorComponent },
  { path: 'empresa', component: EmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
