import { Component, OnInit, Input } from '@angular/core';
import { Detailview } from '../detailview';
import { DetailviewService } from '../detailview.service';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  constructor(private detSvc: DetailviewService, private router:Router, private cartSvc: CartItemService) { }
  details:Detailview={
    id:0,
    pname:'',
    product_code:'',
    pdesc:'',
    price:0,
    // length:1,
    // waist:1,
    pimage:'',   
  }
   //Add to cart
   cart:CartItem={
    id:0,
    pname:'',
    size:1,
    price:0,
    pimage:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.size=product.size;
    this.cart.price=product.price;
    this.cart.pimage=product.pimage;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartSvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartSvc.getCount();
  }

  cartData: any = [];
  //totalprice: number = 0;
  //quantity = 1;

  detail: Detailview[] = [];

  delete(deleteItem: Detailview) {
    this.detSvc.removeItemFromCart(deleteItem).subscribe(
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
    this.detSvc.getCartItems().subscribe(
      (response) => {
        this.detail = response;
        console.log(this.detail);
      }
    )
  }
  @Input()product:any

}
