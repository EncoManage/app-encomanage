import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  private codever: number = 12345;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(4), this.onlyNumbersValidator]],
      password: [, [Validators.required, Validators.minLength(4)]],
    });
  }
  passwordVisible = false;

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  onlyNumbersValidator(control: any) {
    const value = control.value;
    const isValid = /^\d+$/.test(value);
    return isValid ? null : { onlyNumbers: true };
  }

  verfication() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.codigo == this.codever.toString()) {
      this.router.navigate(['']);
      this.showSnackBar('La contraseña fue actualizada');
    } else {
      //alert('Código incorrecto');
      this.showSnackBar('Código incorrecto. Por favor, ingrese un código válido.');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
