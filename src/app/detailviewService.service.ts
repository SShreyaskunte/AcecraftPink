import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Detailview } from './detailview';

@Injectable({
  providedIn: 'root'
})
export class DetailviewService {
  removeItemFromCart(deleteItem: Detailview) {
    throw new Error('Method not implemented.');
  }
  getCartItems() {
    throw new Error('Method not implemented.');
  }

  url: string = ""
  detailviewUrl = environment.detailapi;

  constructor(private http: HttpClient) {
    this.url = this.detailviewUrl + "/";
   }

  addToDetalview(product: Detailview) {
    this.http.post<Detailview>(this.detailviewUrl, product).subscribe(data => {
      console.log(product)
    })
  }

  getDetailview() {
    return this.http.get<Detailview[]>(this.detailviewUrl);
  }
  removeItemFromDetailview(item: any) {
    console.log("Detail id in ts page : "+item)
    return this.http.delete(this.url + item.id)
  }
}
