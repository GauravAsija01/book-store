;
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatDetailComponent } from './component/cat-detail.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [

  { path: ':id', component: CatDetailComponent }


 ];

@NgModule({
  declarations: [CatDetailComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], SharedModule
  ]
})
export class CategoryDetailModule { }
