import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
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
import { NotesInfoComponent } from './notes-info/notes-info.component';
import { NotesComponent } from './notes/notes.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CounterComponent } from './counter/counter.component';
import { NhissizechildComponent } from './nhis/nhissizechild/nhissizechild.component';
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
import { BluehouseComponent } from './bluehouse/bluehouse.component';
import { GetintouchComponent } from './enterprise/getintouch/getintouch.component'; 



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path:'school',component:SchoolComponent},
  {path: 'enterprise', component:EnterpriseComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpass',component:ForgotpasswordComponent},
  {path:'orderstatus',component:OrderstatusComponent},
  {path:'account',component:AccountComponent},
  {path:'personalinfo',component:PersonalInfoComponent},
  {path:'acc_track',component:AccOrdertrackComponent},
  {path:'address_book',component:AddressBookComponent},
  {path:'wallet',component:WalletComponent},
  {path:'order_history',component:OrderHistoryComponent},
  {path:'noteinfo',component:NotesInfoComponent},
  {path:'note',component:NotesComponent},
  {path:'uniform',component:UniformsComponent},
  {path:'cart',component:CartItemsComponent},
  {path: 'nhis',component:NHISComponent},
  {path:'nhissize',component:NhissizechildComponent},
  {path:'cisroyal',component:CISRoyalComponent},
  {path:'nhg3',component:NHGShirt3Component},
  {path:'cis4',component:CIS4Component},
  {path:'cis5',component:CIS5Component},
  {path:'cis6',component:CIS6Component},
  {path:'cis7',component:CIS7Component},
  {path:'jumper',component:NHGJumpersComponent},
  {path:'yellow',component:CIS10Component},
  {path:'zipper',component:CISZippersComponent},
  {path:'trousers',component:NHTrousersComponent},
  {path:'blue',component:BluehouseComponent},
  {path:'getintouch',component:GetintouchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
