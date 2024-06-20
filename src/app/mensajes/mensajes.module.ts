import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { MensajesComponent } from './mensajes.component';
import { DetalleChatComponent } from './detalle-chat/detalle-chat.component';
import { AgregarChatComponent } from './agregar-chat/agregar-chat.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MensajesComponent,
    DetalleChatComponent,
    AgregarChatComponent
  ],
  imports: [
    CommonModule,
    MensajesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MensajesModule { }
