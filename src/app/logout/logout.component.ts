import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cartSvc:CartItemService) { }

  cartCount: number=0;
  totalPrice: number=0;

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     )
  }

}
