import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './component/login.component';
import { RegistrationComponent } from '../registration/component/registration.component';

const routes: Routes = [
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, ReactiveFormsModule, [RouterModule.forChild(routes)]
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
