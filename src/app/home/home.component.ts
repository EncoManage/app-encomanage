import { OrderRequest } from './../hacer-pedido/model/order-request.model';


import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedProfile: string | null = null;

  constructor(private router: Router, private snackBar: MatSnackBar,private orderService: OrderService ) {
    this.orderService.setOrder(this.newOrder);
  }

 

  newOrder: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: '',
    price: 0,
  };
 
  OnInit(){
    this.orderService.setOrder(this.newOrder);
  }
  selectProfile(profile: string ) {

    this.selectedProfile = profile;
  }

  navigate() {
    if (this.selectedProfile === 'consumer') {
      this.router.navigate(['/menus/consumidor']);
      this.showSnackBar('Se seleccionó el perfil Consumidor.');
    } else if (this.selectedProfile === 'business') {
      this.router.navigate(['/menus/empresa']);
      this.showSnackBar('Se seleccionó el perfil Empresa.');
    } else {
      //alert('Por favor, seleccione un perfil antes de continuar. Esto nos ayudará a personalizar tu experiencia en la plataforma según tus necesidades y preferencias. ¡Gracias!');
      this.showSnackBar('Por favor, seleccione un perfil antes de continuar. Esto nos ayudará a personalizar tu experiencia en la plataforma según tus necesidades y preferencias. ¡Gracias!');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}

