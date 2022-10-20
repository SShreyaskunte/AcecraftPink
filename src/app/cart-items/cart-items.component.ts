import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';




@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartSvc: CartItemService,private authService:UserServiceService,private http : HttpClient, private router:Router) { this.url = this.carturl + "/"; }
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
  quantity: number = 1;

  receivequantity($event: number) {  
    this.quantity = $event;  
    }

    totalPrices(cart:CartItem){
      this.carts.totalPrice = cart.quantity * cart.price;
      return this.carts.totalPrice;
    }

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }

  cart: CartItem[] = [];

  updateToCart(cart:CartItem){
    console.log(this.quantity)
    this.carts.id=cart.id;
   this.carts.totalPrice=(cart.price * this.quantity);
    this.carts.quantity=this.quantity;
    this.cartSvc.updateCart(this.carts).subscribe(
      ()=>console.log("update successfully")
    );const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item Updated successfully'
    })
 
    this.ngOnInit();
  }

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
    this.router.navigate(['uniform'])
  }
  isAuthenticated: boolean = true;

  ngOnInit(): void {
    console.log("inside onint")
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    );
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.isAuthenticated = data;
      }
    );

}
  // counterValue=this.cartData.reduce((item: any)=>(item.quantity));

  
  @Output() countEmmitter =new EventEmitter(); //4

  PostValue(){
    this.countEmmitter.emit(this.cartData.quantity);//4
  }

  url: string = ""
  carturl = environment.cartapi;

  // isloggedin()
  // {
   
  //   if(this.isAuthenticated == true)
  //   {
  //     console.log("In islogged in ?"+this.isAuthenticated);
  //     this.router.navigate(['https://rzp.io/i/G6v9RUHFt5']);
  //   }
  //   else
  //   {
  //     console.log("In islogged in ?"+this.isAuthenticated);
  //     this.router.navigate(['/login']);
  //   }
  // }
}