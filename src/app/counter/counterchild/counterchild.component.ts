import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/cart-item';
import { CartItemService } from 'src/app/cart-item.service';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  constructor(private cartSvc: CartItemService, private router:Router) {}

  @Input() counterValue: number = 1;
  countLessThenOne = true;

  @Output() countEmitter = new EventEmitter();
  @Output() quantityEmitter = new EventEmitter();

  // carts:CartItem={
  //   id:0,
  //   pname:'',
  //   // product_code:'',
  //   // pdesc:'',
  //   price:0,
  //   size:1,
  //   // length:1,
  //   // waist:1,
  //   pimage:'',
  //   quantity:1,
  //   totalPrice:1    
  // }

  // cartData: any = [];
  // totalprice: number = 0;
  // quantity = 1;

  // cart: CartItem[] = [];

  PostData() {
    this.countEmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);
  }
   
   //increment and decrement 
 
   //Quantity -> 10
   decrement(){
     if(this.counterValue==1)
     {
       this.countLessThenOne=false;
     }
     else{
       this.countLessThenOne=true;
       this.counterValue--;
     }
     this.PostData();
   }
 
   increment(){
    this.counterValue++;
    this.countLessThenOne = true;
    this.PostData();
    }

  ngOnInit(): void {
  }

}
