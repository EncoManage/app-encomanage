import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes.component';
import { DetalleChatComponent } from './detalle-chat/detalle-chat.component';
import { AgregarChatComponent } from './agregar-chat/agregar-chat.component';

const routes: Routes = [
  { path: '', component: MensajesComponent },
  { path: 'detalle-chat', component: DetalleChatComponent },
  { path: 'agregar-chat', component: AgregarChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }
