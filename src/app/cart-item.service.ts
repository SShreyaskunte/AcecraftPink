import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  url: string = ""
  carturl = environment.cartapi;

  constructor(private http : HttpClient) { this.url = this.carturl + "/"; }

  addToCart(product: CartItem) {

    this.http.post<CartItem>(this.carturl, product).subscribe(data => {
      console.log(product)
    })
  }
  getCartItems() {
    return this.http.get<CartItem[]>(this.carturl);
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
  // }

  updateCart(item: any) {
    let id = item.id;
    console.log(item.quantity)
    this.http.patch<CartItem>(this.url + item.id, {

      quantity: 1,
      totalPrice: 1
      //

    });
    //const cartUrl = `${this.url}/${id}`;
    //return this.http.delete(this.url + item.id)
    return this.http.patch<CartItem>(this.url + item.id, {

      quantity: item.quantity,
      totalPrice: item.totalPrice
      //

    });
  }
  emptyCart() {

  }
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe(res => {


      // We use the subject to emit data
      this.countSubject.next(res.length);
      console.log(this.countSubject + "inside sub")
      //const user=res.length

    })
  }

}
