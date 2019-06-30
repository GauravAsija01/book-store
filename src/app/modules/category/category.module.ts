import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListModule } from '../category-list/category-list.module';
import { CategoryListDetailModule } from '../category-list-detail/category-list-detail.module';

import { CategoryComponent } from './components/category.component';


const routes: Routes = [

 ];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], CategoryListModule, CategoryListDetailModule
  ],
  exports: [RouterModule]
})
export class CategoryModule { }
