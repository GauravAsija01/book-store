import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from '../../modules/login/login.module';
import { RegistrationModule } from '../../modules/registration/registration.module';


import { LayoutOuterComponent } from './component/layout-outer.component';
import { RegistrationComponent } from '../../modules/registration/component/registration.component';



const routes: Routes = [

]

@NgModule({
  declarations: [LayoutOuterComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], LoginModule, RegistrationModule
  ]
})
export class LayoutOuterModule { }
