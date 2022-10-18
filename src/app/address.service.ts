import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }
  addressurl = environment.addressapi;


  postAddress(data:any){
    return this.http.post<any>(this.addressurl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getAddressDetails(){
    return this.http.get<any>(this.addressurl).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAddress(data:any, id:number){
    return this.http.put<any>(this.addressurl+'/'+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAddress(id:number){
    return this.http.delete<any>(this.addressurl+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
