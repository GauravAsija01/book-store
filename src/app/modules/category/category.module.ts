import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';
//import { CategoryDetailModule } from './../category-detail/category-detail.module';

import { CategoryComponent } from './components/category.component';
import { CatDetailComponent } from './../category-detail/component/cat-detail.component';



const routes: Routes = [

  { path: 'category', component: CategoryComponent,
    children: [
      {
        path: ':id', component: CatDetailComponent
      }
    ]
  }


 ];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], SharedModule
    //, CategoryDetailModule
  ],
  exports: [RouterModule]
})
export class CategoryModule { }
