import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userurl = environment.userapi;
  registerForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confpassword: new FormControl(''),
    pname: new FormControl(''),
    adno: new FormControl('')

    // mobile: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router:Router) { }
  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpassword: ['', [Validators.required, Validators.minLength(6)]],
      pname: ['', [Validators.required]],
      adno: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      // mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    }
    // SignupComponent.mustMatch('password', 'confpassword')
    );
  }
  /*static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  password(formGroup: FormGroup) {
    const pass = formGroup.get('password');
    const confpass = formGroup.get('confpassword');
    return pass === confpass ? null : { passwordNotMatch: true };
  }*/
  get f() { return this.registerForm.controls; }
    submitHandler() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.http.post<any>(this.userurl, this.registerForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Sign Up Successful'
        })
        this.registerForm.reset();
        this.router.navigate(['login']);
      })

      
    }

}
