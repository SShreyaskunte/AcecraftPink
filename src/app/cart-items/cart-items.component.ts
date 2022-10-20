import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit{
  isAuthenticated: boolean = false;

  constructor(private cartSvc: CartItemService,private http : HttpClient, private router:Router, private authService: UserServiceService,) { this.url = this.carturl + "/"; }
  carts:CartItem={
    id:0,
    pname:'',
    // product_code:'',
    // pdesc:'',
    price:1,
    size:1,
    // length:1,
    // waist:1,
    pimage:'',
    quantity:1,
    totalPrice:1    
  }
  cartData: any = [];
  totalprice: number = 1;
  quantity = 1;


  

  
  receivequantity($event: number) {  
    this.quantity = $event;  
    } 
  //  totalPrices(data:any) {
  //    debugger  
  //        this.totalprice=0;
  //       this.cartData=data    
  //        console.log(this.cartData);  
  //       for(let j=0;j<data.length;j++){   
  //       this.totalprice+= (this.cartData[j].price +this.cartData[j].quantity )
  //             console.log(this.cartData[j].quantity)  
  //        }  
  //        return this.totalprice;
  //  }

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }

  cart: CartItem[] = [];

  totalPrices(cart:CartItem){
    this.carts.totalPrice = cart.quantity * cart.price;
    return this.carts.totalPrice;
  }
  updateToCart(cart:CartItem){
    console.log(this.quantity)

    this.carts.id=cart.id;
  
   this.carts.totalPrice=(cart.price * this.quantity);
  
    this.carts.quantity=this.quantity;
  
    this.cartSvc.updateCart(this.carts).subscribe(
      ()=>console.log("update successfully")
 
    )
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

  ngOnInit(): void {
    
    
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
   
  }
  // counterValue=this.cartData.reduce((item: any)=>(item.quantity));

  
  @Output() countEmmitter =new EventEmitter(); //4

  PostValue(){
    this.countEmmitter.emit(this.cartData.quantity);//4
  }

  url: string = ""
  carturl = environment.cartapi;
  // log() {
    // var isAuthenticated = this.authService.authSubject.subscribe(
    //   data => {
    //     console.log('next subscribed value: ' + data);
    //     this.isAuthenticated = data;
    //   })

    // if (this.isAuthenticated == false) {
    //   console.log('inside false ' + this.isAuthenticated);
    //   this.router.navigate(['/login']);
    //   return false;
    // } else {
    //   console.log('next subscribed value:t3etg ' + this.isAuthenticated);
    //   //this.router.navigate(['/Home']);
    //   return true;
    // }

  // }
}
