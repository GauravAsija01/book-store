import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { CategoryModule } from './modules/category/category.module';
import { CategoryDetailModule } from './modules/category-detail/category-detail.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/not-found/component/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    //MatProgressSpinnerModule,
    HomeModule,
    RegistrationModule,
    LoginModule,
    CategoryModule,
    
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
