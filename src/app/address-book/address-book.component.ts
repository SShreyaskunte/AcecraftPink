import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  formValue!: FormGroup;
  AddressModelObj : Address = new Address();
  addressData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api:AddressService, private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      sname:[''],
      contact:[''],
      address:['']
    })
    this.getAddress();
  }
  clickAddAddress(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postAddressDetails(){
    this.AddressModelObj.sname = this.formValue.value.sname;
    this.AddressModelObj.contact = this.formValue.value.contact;
    this.AddressModelObj.address = this.formValue.value.address;

    this.api.postAddress(this.AddressModelObj).subscribe(res=>{
      console.log(res);
      alert("New Address added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAddress();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }
  

  getAddress(){
    this.api.getAddressDetails().subscribe(res=>{
      this.addressData = res;
    }, err=>{
      
    })
  }

  deleteAddress(product: any){
    this.api.deleteAddress(product.id).subscribe(res=>{
      alert("Address deleted!")
      this.getAddress();
    }), 
    ({

    })
  }

  onEdit(addresss: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.AddressModelObj.id = addresss.id;
    this.formValue.controls['sname'].setValue(addresss.sname);
    this.formValue.controls['contact'].setValue(addresss.contact);
    this.formValue.controls['address'].setValue(addresss.address);
  }

  updateAddressDetails(){
    this.AddressModelObj.sname = this.formValue.value.sname;
    this.AddressModelObj.contact = this.formValue.value.contact;
    this.AddressModelObj.address = this.formValue.value.address;
    this.api.updateAddress(this.AddressModelObj, this.AddressModelObj.id).subscribe(res=>{
      alert("The Address is updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAddress();
    })
  }
  // productdetails(){
  //   this.router.navigate(['productdetails']);
  // }
  // userdetails(){
  //   this.router.navigate(['userdetails']);
  // }
  // feedbackdetails(){
  //   this.router.navigate(['feedbackdetails']);
  // }

}
