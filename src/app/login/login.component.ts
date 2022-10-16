import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Authenticate user details from userapi
userapi=environment.userapi;
  public loginForm!:FormGroup
  submitted = false;
get f() { return this.loginForm.controls; }

  constructor(private formBuilder:FormBuilder,private router:Router, private http:HttpClient, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
      });
     /* if(user.useremail=="admin@gmail.com" && user.password=="admin1234")
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Admin Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['productdetails'])
        this.userService.validateAuth(true);
      }*/
      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'User Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate([''])
        this.userService.validateAuth(true);
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })       
        this.userService.validateAuth(false);
      }
    })
  }

}
