import { LoginComponent } from './../login/component/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './component/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, SharedModule, [RouterModule.forChild(routes)]
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
