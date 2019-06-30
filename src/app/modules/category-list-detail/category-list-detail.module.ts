import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatListDetailComponent } from './component/cat-list-detail.component';

const routes: Routes = [
];

@NgModule({
  declarations: [CatListDetailComponent],
  imports: [
    CommonModule,  [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class CategoryListDetailModule { }
