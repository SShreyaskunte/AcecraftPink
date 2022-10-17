import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


import { NavComponent } from './nav/nav.component';


import { CollegeComponent } from './college/college.component';
import { SchoolComponent } from './school/school.component';


import { EnterpriseComponent } from './enterprise/enterprise.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { AccountComponent } from './account/account.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccOrdertrackComponent } from './acc-ordertrack/acc-ordertrack.component';
import { NotesComponent } from './notes/notes.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { NotesInfoComponent } from './notes-info/notes-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SchoolComponent,
    CollegeComponent,
    NotesInfoComponent,
    CollegeComponent,
    SchoolComponent,
    SignupComponent,
    CollegeComponent,
    EnterpriseComponent,
    LoginComponent,
    ForgotpasswordComponent,
    OrderstatusComponent,
    AccountComponent,
    PersonalInfoComponent,
    AddressBookComponent,
    OrderHistoryComponent,
    WalletComponent,
    AccOrdertrackComponent,
    NotesComponent,
    UniformsComponent,
    CartItemsComponent,
    DetailviewComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
