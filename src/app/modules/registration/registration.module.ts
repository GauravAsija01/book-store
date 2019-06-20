import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { RegistrationComponent } from './component/registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent }
]

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, [RouterModule.forChild(routes)]
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
