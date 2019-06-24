import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './components/category.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [

  { path: 'category', component: CategoryComponent }


 ];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], SharedModule
  ]
})
export class CategoryModule { }
