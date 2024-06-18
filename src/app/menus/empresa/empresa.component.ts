import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {
  constructor(private Router: Router) { }

  shipSummary(): void{
    this.Router.navigate(['/hacer-pedido/create-order'])
  }

  shipAnalytics(): void{
    this.Router.navigate(['/hacer-pedido/create-order'])
  }

  chats(): void{
    this.Router.navigate(['/hacer-pedido/create-order'])
  }

  notificaciones(): void{
    this.Router.navigate(['/menus/notificaciones'])
  }
}