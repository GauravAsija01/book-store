import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';


import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { CategoryModule } from 'src/app/modules/category/category.module';
import { FilterPipeModule } from './../../modules/pipe_Filter/filter.pipe.module';

import { LayoutSharedComponent } from './component/layout-shared.component';
import { HomeComponent } from 'src/app/modules/home/component/home.component';
import { CategoryComponent } from 'src/app/modules/category/components/category.component';
import { CategoryListComponent } from '../../modules/category-list/component/category-list.component';
import { CatListDetailComponent } from 'src/app/modules/category-list-detail/component/cat-list-detail.component';
import { FilterComponent } from './../../modules/pipe_Filter/filter.component';
import { NotFoundComponent } from 'src/app/modules/not-found/component/not-found.component';
import { TodoComponent } from 'src/app/modules/todos/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: LayoutSharedComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: CategoryListComponent },
          { path: ':id/:name', component: CatListDetailComponent }
        ]
      },
      { path: 'filter', component: FilterComponent },
      { path: 'todos', component: TodoComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
]

@NgModule({
  declarations: [LayoutSharedComponent, NotFoundComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)], SharedModule, HomeModule, CategoryModule, FilterPipeModule
  ]
})
export class LayoutSharedModule { }
