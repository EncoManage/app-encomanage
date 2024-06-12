import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedProfile: string | null = null;

  constructor(private router: Router) {}

  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }

  navigate() {
    if (this.selectedProfile === 'consumer') {
      this.router.navigate(['/menu-consumer']);
    } else if (this.selectedProfile === 'business') {
      this.router.navigate(['/menu-business']);
    } else {
      alert('Por favor, seleccione un perfil antes de continuar. Esto nos ayudará a personalizar tu experiencia en la plataforma según tus necesidades y preferencias. ¡Gracias!');
    }
  }
}
