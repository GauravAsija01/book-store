import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './components/category.component';


const routes: Routes = [

  { path: 'category', component: CategoryComponent }


 ];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)]
  ]
})
export class CategoryModule { }
