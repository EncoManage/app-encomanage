import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRequest } from '../hacer-pedido/model/order-request.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedProfile: string | null = null;
  newOrder: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: ''
  };
  constructor(private router: Router, private orderService: OrderService) {
    this.orderService.setOrder(this.newOrder);
  }
  OnInit(){
    this.orderService.setOrder(this.newOrder);
  }
  selectProfile(profile: string ) {
    this.selectedProfile = profile;
  }

  navigate() {
    if (this.selectedProfile === 'consumer') {
      this.router.navigate(['/menus/consumidor']);
    } else if (this.selectedProfile === 'business') {
      this.router.navigate(['/menus/empresa']);
    } else {
      alert('Por favor, seleccione un perfil antes de continuar. Esto nos ayudará a personalizar tu experiencia en la plataforma según tus necesidades y preferencias. ¡Gracias!');
    }
  }
}
