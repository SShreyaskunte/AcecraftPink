import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {CarouselModule} from 'primeng/carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesInfoComponent } from './notes-info/notes-info.component';
import { CollegeComponent } from './college/college.component';
import { SchoolComponent } from './school/school.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { AccountComponent } from './account/account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccOrdertrackComponent } from './acc-ordertrack/acc-ordertrack.component';
import { NotesComponent } from './notes/notes.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { NHISComponent } from './nhis/nhis.component';
import { CISRoyalComponent } from './cisroyal/cisroyal.component';
import { NHGShirt3Component } from './nhgshirt3/nhgshirt3.component';
import { CIS4Component } from './cis4/cis4.component';
import { CIS5Component } from './cis5/cis5.component';
import { CIS6Component } from './cis6/cis6.component';
import { CIS7Component } from './cis7/cis7.component';
import { NHGJumpersComponent } from './nhgjumpers/nhgjumpers.component';
import { CIS10Component } from './cis10/cis10.component';
import { CISZippersComponent } from './ciszippers/ciszippers.component';
import { NHTrousersComponent } from './nhtrousers/nhtrousers.component';
import { NhissizechildComponent } from './nhis/nhissizechild/nhissizechild.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { CounterComponent } from './counter/counter.component';
import { BluehouseComponent } from './bluehouse/bluehouse.component';
import { SortPipe } from './Pipes/sort.pipe';
import { AddressComponent } from './address/address.component';
import { GetintouchComponent } from './enterprise/getintouch/getintouch.component';
import { LowtohighComponent } from './lowtohigh/lowtohigh.component';
import { HightolowComponent } from './hightolow/hightolow.component';
import { FooterComponent } from './footer/footer.component';
import { GetHelpComponent } from './get-help/get-help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccOrderComponent } from './acc-order/acc-order.component';
import { ProductionComponent } from './production/production.component';
import { OthersComponent } from './others/others.component';
import { ReturnsComponent } from './returns/returns.component';
import { TermsComponent } from './terms/terms.component';
import { PaymentsComponent } from './payments/payments.component';
import { CareComponent } from './care/care.component';
import { ShippingComponent } from './shipping/shipping.component';


import { AscendingComponent } from './ascending/ascending.component';
import { DescendingComponent } from './descending/descending.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonalInfoComponent } from './login/personal-info/personal-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    EnterpriseComponent,
    SchoolComponent,
    CollegeComponent,
    NotesInfoComponent,
    SignupComponent,
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
    CounterComponent,
    UniformsComponent,
    NHISComponent,
    CISRoyalComponent,
    NHGShirt3Component,
    CIS4Component,
    CIS5Component,
    CIS6Component,
    CIS7Component,
    NHGJumpersComponent,
    CIS10Component,
    CISZippersComponent,
    NHTrousersComponent,
    NhissizechildComponent,
    BluehouseComponent,
    SortPipe,
    AddressComponent,
    GetintouchComponent,
    LowtohighComponent,
    HightolowComponent,
    FooterComponent,
    GetHelpComponent,
    AboutUsComponent,
    AccOrderComponent,
    ProductionComponent,
    OthersComponent,
    ReturnsComponent,
    TermsComponent,
    PaymentsComponent,
    CareComponent,
    ShippingComponent,
    LowtohighComponent,
    HightolowComponent,
    AscendingComponent,
    DescendingComponent,
    CarouselComponent,
    LogoutComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
