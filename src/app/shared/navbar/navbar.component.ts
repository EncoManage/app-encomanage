import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);

  logout(): void {
    this.router.navigate(['/'])
  }

  makeOrder(): void{
    this.router.navigate(['/hacer-pedido/create-order'])
  }

  seeOrders(): void{
    this.router.navigate(['/ver-pedidos'])
  }
}
