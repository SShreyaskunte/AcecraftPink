import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Detailview } from './detailview';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailviewService {
  url: string = ""
  detailurl = environment.detailapi;

  constructor(private http : HttpClient) { this.url = this.detailurl + "/";}
  addToCart(product: Detailview) {

    this.http.post<Detailview>(this.detailurl, product).subscribe(data => {
      console.log(product)
    })
  }
  getCartItems() {
    return this.http.get<Detailview[]>(this.detailurl);
  }

  removeItemFromCart(item: any) {

    return this.http.delete(this.url + item.id)
  }
  
  // public countSubject = new Subject<number>();
  // getCount() {
  //   return this.getCartItems().subscribe(res => {
  //     // We use the subject to emit data
  //     this.countSubject.next(res.length);
  //     console.log(this.countSubject + "inside sub")
        
  //   })
  }


