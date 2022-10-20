import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

    submitted = false;


  constructor(private router:Router,private formbuilder:FormBuilder) { 
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
  trackNow(){
    alert("We Will Notify Your Status Shortly!!!");
  }

  submitHandler(){
    this.submitted = true;
    if (this.orderFrom.invalid) {
      return;
    }
    console.log(this.orderFrom.value)
    alert("Product added sucessfully.Thank you");
  }

}
