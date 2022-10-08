import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path: 'enterprise', component:EnterpriseComponent}
=======
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpass',component:ForgotpasswordComponent}

>>>>>>> 6b9074139413c5d695f62da1aa66a8a35b7d5ab9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  
}
