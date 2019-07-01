import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySearchPanelModule } from './../category-search-panel/category-search-panel.module';

import { CategoryListComponent } from './component/category-list.component';




const routes: Routes = [

 ];

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], CategorySearchPanelModule
  ]
})
export class CategoryListModule { }
