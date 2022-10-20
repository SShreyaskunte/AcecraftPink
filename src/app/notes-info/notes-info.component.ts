import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-notes-info',
  templateUrl: './notes-info.component.html',
  styleUrls: ['./notes-info.component.css']
})
export class NotesInfoComponent implements OnInit {

  count=0;
  
  constructor(private Formbuilder:FormBuilder) { 
    this.submitForm=Formbuilder.group({
      "Name":['',Validators.required],
      "Email":['',Validators.required],
      "Message":['',Validators.required]
    })
  }
  get f(){ return this.submitForm.controls}
  submitForm=new FormGroup({
    Name:new FormControl,
    Email:new FormControl,
    Message:new FormControl
  })

  ngOnInit(): void {
  }

  submitHandler(){
    console.log(this.submitForm.value)
    
   if(this.submitForm.value!=0){
     this.count++;
   } 
   const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  })

  Toast.fire({
    icon: 'success',
    title: 'Thank For Your Feedback'
  })
    
  }

}
