import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LayoutSharedModule } from './layout/layout-shared/layout-shared.module';
import { LayoutOuterModule } from './layout/layout-outer/layout-outer.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { TodoComponent } from './modules/todos/todo.component';


@NgModule({
  declarations: [
    AppComponent, LoaderComponent, TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    LayoutSharedModule, LayoutOuterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
