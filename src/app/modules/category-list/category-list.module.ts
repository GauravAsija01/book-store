import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './component/category-list.component';
import { CategorySearchComponent } from '../category-search-panel/component/category-search.component';

const routes: Routes = [

 ];

@NgModule({
  declarations: [CategoryListComponent, CategorySearchComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)]
  ]
})
export class CategoryListModule { }
