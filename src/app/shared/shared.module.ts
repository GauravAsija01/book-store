import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from '../modules/login/component/login.component';
import { RegistrationComponent } from '../modules/registration/component/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
]


@NgModule({
  declarations: [ HeaderComponent, FooterComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)]
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
