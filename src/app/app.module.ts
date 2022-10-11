import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { CollegeComponent } from './college/college.component';

import { NotesInfoComponent } from './notes-info/notes-info.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavComponent,
  
    CollegeComponent,
    EnterpriseComponent,


    LoginComponent,
    ForgotpasswordComponent,
    OrderstatusComponent
    

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
