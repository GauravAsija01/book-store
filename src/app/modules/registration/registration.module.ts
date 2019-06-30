import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './component/registration.component';

const routes: Routes = [
]

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, ReactiveFormsModule, [RouterModule.forChild(routes)]
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
