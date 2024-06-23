import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../user/services/auth.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  shipSummary(): void{
    this.router.navigate(['/historial-de-pedidos/historial-menu'])
  }

  shipAnalytics(): void{
    this.router.navigate(['/hacer-pedido/create-order'])
  }

  chats(): void{
    this.router.navigate(['/mensajes'])
  }

  notificaciones(): void{
    this.router.navigate(['/menus/notificaciones'])
  }
}