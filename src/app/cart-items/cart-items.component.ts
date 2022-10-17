import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartSvc: CartItemService, private router:Router) { }
  carts:CartItem={
    id:0,
    pname:'',
    // product_code:'',
    // pdesc:'',
    price:0,
    size:1,
    // length:1,
    // waist:1,
    pimage:'',
    quantity:1,
    totalPrice:1    
  }
  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }
  cart: CartItem[] = [];

  delete(deleteItem: CartItem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['allproducts'])
  }

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }

  
  // counterValue=this.cartData.reduce((item: any)=>(item.quantity));
  counterValue=this.quantity;
  countLessThenOne=true;
  countMax=true;
  
  @Output() countEmmitter =new EventEmitter(); //4

  PostValue(){
    this.countEmmitter.emit(this.counterValue);//4
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
    this.PostValue();
  }

  increment(){
   if(this.counterValue==10){
     this.countMax=false;
   }
   else{
    this.counterValue++;
    this.countLessThenOne=true;
    this.countMax=false;
    this.PostValue();
   }
  }

}
