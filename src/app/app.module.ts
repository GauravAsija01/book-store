import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LayoutSharedModule } from './layout/layout-shared/layout-shared.module';
import { LayoutOuterModule } from './layout/layout-outer/layout-outer.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    //MatProgressSpinnerModule,
    LayoutSharedModule, LayoutOuterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
