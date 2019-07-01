import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySearchComponent } from './component/category-search.component';


@NgModule({
  declarations: [CategorySearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategorySearchComponent
  ]
})
export class CategorySearchPanelModule { }
