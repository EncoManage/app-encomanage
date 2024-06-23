import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../user/services/auth.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.css'
})
export class ConsumidorComponent {
  
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  newShipment(): void{
    this.router.navigate(['/hacer-pedido/create-order'])
  }

  activeShipments(): void{
    this.router.navigate(['/hacer-pedido/create-order'])
  }

  shipmentRecord(): void{

    this.router.navigate(['/historial-de-pedidos/historial-menu'])
  }

  notificaciones(): void{
    this.router.navigate(['/menus/notificaciones'])

  }
}