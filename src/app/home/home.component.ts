import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedProfile: string | null = null;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  selectProfile(profile: string) {
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
