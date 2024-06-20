import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
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
    this.showSnackBar(`Se ${action} la notificación ${type}`);
  }

  handleServiceChange(event: any, service: string) {
    const action = event.checked ? 'enviarán' : 'dejarán de enviar';
    this.showSnackBar(`Se ${action} notificaciones para ${service}`);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  volver(): void{
    this.router.navigate(['/home'])
  }
}
