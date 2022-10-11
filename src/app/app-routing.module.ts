import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path: 'enterprise', component:EnterpriseComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpass',component:ForgotpasswordComponent},
  {path:'orderstatus',component:OrderstatusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  
}
