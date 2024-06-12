import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: 'signup', component:SignupComponent },
  { path: '', component:LoginComponent },
  { path: 'verificacion', component:VerificacionComponent },
  { path: 'password', component:PasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
