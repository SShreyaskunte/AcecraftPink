import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent implements OnInit {

submitted = false;
// first:string =""
// last:string =""
  //orderFrom: FormGroup;

  constructor(private formbuilder:FormBuilder) {
    this.orderFrom=formbuilder.group({
      "FirstName":['',Validators.required],
      "LastName":['',Validators.required],
      "Email":['',Validators.required],
      "Organisation":['',Validators.required],
      "Phone":['',Validators.required],
    })
    
   }
   get f(){return this.orderFrom.controls;}

   orderFrom=new FormGroup({
    FirstName: new FormControl(''),
    LastName:new FormControl(''),
    Email:new FormControl(''),
    Organisation:new FormControl(''),
    Phone:new FormControl('')
  })
  ngOnInit(): void {
  }

  submitHandler(){
    this.submitted = true;
    this.submitted=true;
    if (this.orderFrom.invalid) {
      return;
    }
    console.log(this.orderFrom.value);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
    })
  
    Toast.fire({
      icon: 'success',
      title: 'Thank You For Getting In Touch With Us'
    })
      
    }
  }

