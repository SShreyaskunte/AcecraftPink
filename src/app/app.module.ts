import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegeComponent } from './college/college.component';
import { NotesInfoComponent } from './notes-info/notes-info.component';
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
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { CounterComponent } from './counter/counter.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CollegeComponent,
    EnterpriseComponent,
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
    CartItemsComponent,
    CounterchildComponent,
    CounterComponent
    

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
