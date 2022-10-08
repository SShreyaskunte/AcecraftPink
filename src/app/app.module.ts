import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { CollegeComponent } from './college/college.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
=======

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';

>>>>>>> 6b9074139413c5d695f62da1aa66a8a35b7d5ab9

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    NavComponent,
    BodyComponent,
    CollegeComponent,
    EnterpriseComponent
=======
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    OrderstatusComponent
    
>>>>>>> 6b9074139413c5d695f62da1aa66a8a35b7d5ab9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
