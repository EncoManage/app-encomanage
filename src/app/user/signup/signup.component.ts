import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(
    private fb: FormBuilder,        
    private router: Router
  ) { }


  form: FormGroup = this.fb.group({
    firstName: [, [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^(.+)@(.+)$')]],
    password: [, [Validators.required, Validators.minLength(4)]],
  });  
  passwordVisible = false;
  

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }
  
  signup() {
    if (this.form.invalid) {
      return;
    }
    const formValue = this.form.value;
        
  }
}
