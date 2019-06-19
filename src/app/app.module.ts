import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { HomeModule } from './components/home/home.module';
import { RegistrationModule } from './components/registration/registration.module';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// import { HeaderComponent } from './components/shared/header/header.component';
// import { FooterComponent } from './components/shared/footer/footer.component';
//import { LoaderComponent } from './components/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    // HeaderComponent,
    // FooterComponent
    //LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    //MatProgressSpinnerModule,
    HomeModule,
    RegistrationModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
