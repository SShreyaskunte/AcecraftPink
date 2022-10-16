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
  
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe(res => {
      // We use the subject to emit data
      this.countSubject.next(res.length);
      console.log(this.countSubject + "inside sub")
        
    })
  }
}
