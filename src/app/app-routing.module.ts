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
  {path:'cart',component:CartItemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  
}
