import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent implements OnInit {

submitted = false;
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
    console.log(this.orderFrom.value)
    alert("Product added sucessfully.Thank you");
    alert("Thank You For Contacting Us..");
  }

}