import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MenusComponent,
    ConsumidorComponent,
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    MaterialModule
  ]
})
export class MenusModule { }
