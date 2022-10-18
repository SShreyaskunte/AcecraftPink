import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartItemService } from '../cart-item.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nhgshirt3',
  templateUrl: './nhgshirt3.component.html',
  styleUrls: ['./nhgshirt3.component.css']
})
export class NHGShirt3Component implements OnInit {

  constructor(private cartsvc:CartItemService) { }

  addtocartProd: (string| number)[] = [];

  cart:CartItem={
    id:0,
    pname:'',
    size:0,
    price:0,
    pimage:'',
    quantity:1,
    totalPrice:1    
  }


  ngOnInit(): void {
  }

  quantity:number=1;
  size:number= 1;

  addToCart(addtocartProd: (string | undefined)[]){
    this.cart.id=addtocartProd[0];
    this.cart.pname=addtocartProd[1];
    this.cart.price=addtocartProd[3];
    this.cart.pimage=addtocartProd[4];
    this.cart.size=this.size;
    this.cart.totalPrice=addtocartProd[6];
    this.cart.quantity=this.quantity;
    this.cartsvc.addToCart(this.cart);
    console.log(addtocartProd[0]);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }
  //Input Class Decorator
  //@Input()product:any

  sizes= [
    {name: '18'},
    {name: '20'},
    {name: '22'},
    {name: '24'},
    {name: '26'},
    {name: '28'},
    {name: '30'},
    {name: '32'}
  ];

}

