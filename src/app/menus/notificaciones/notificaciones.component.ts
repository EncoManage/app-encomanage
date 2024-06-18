import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [false],
      sms: [false],
      push: [false],
      packageStatus: [false],
      chats: [false],
      promotions: [false]
    });
  }
  
  handleNotificationChange(event: any, type: string) {
    const action = event.checked ? 'activó' : 'desactivó';
    alert(`Se ${action} la notificación ${type}`);
  }

  handleServiceChange(event: any, service: string) {
    const action = event.checked ? 'enviarán' : 'dejarán de enviar';
    alert(`Se ${action} notificaciones para ${service}`);
  }
}
