import { Component } from '@angular/core';
import { AuthRequest } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authRequest: any = {};

  private email1: string = "consumidor@gmail.com";
  private email2: string = "empresa@gmail.com";

  form: FormGroup;

  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^(.+)@(.+)$')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  controlHasError(control: string, error: string): boolean {
    return this.form.controls[control].hasError(error);
  }

  login() {
    if (this.form.invalid) {
      return;
    }
    
    const { email, password } = this.form.value;

    if (email === this.email1 && password === "12345") {
      this.router.navigate(['menus/consumidor']);
    } else if (email === this.email2 && password === "67890") {
      this.router.navigate(['menus/empresa']);
    } else {
      alert('Credenciales incorrectas. Inténtelo de nuevo. Prueba con el email:consumidor@gmail.com y contraseña:12345 para probar el perfil consumidor, o el email:empresa@gmail.com y contraseña:67890 para probar el perfil empresa');
    }
  }
}
