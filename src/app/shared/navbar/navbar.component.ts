import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../user/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  makeOrder(): void{
    this.router.navigate(['/hacer-pedido/create-order'])
  }

  seeOrders(): void{
    this.router.navigate(['/ver-pedidos'])
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
