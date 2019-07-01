import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySearchPanelModule } from './../category-search-panel/category-search-panel.module';

import { CatListDetailComponent } from './component/cat-list-detail.component';

const routes: Routes = [
];

@NgModule({
  declarations: [CatListDetailComponent],
  imports: [
    CommonModule,  [RouterModule.forChild(routes)], CategorySearchPanelModule
  ],
  exports: [RouterModule]
})
export class CategoryListDetailModule { }
