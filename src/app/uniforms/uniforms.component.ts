import { Component, OnInit, Input } from '@angular/core';
import { Detailview } from '../detailview';
import { DetailviewService } from '../detailview.service';
import Swal from 'sweetalert2';
import * as all from 'src/app/uniforms/products.json';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-uniforms',
  templateUrl: './uniforms.component.html',
  styleUrls: ['./uniforms.component.css']
})
export class UniformsComponent implements OnInit {
  //producturl=environment.productapi;

  constructor(private detsvc:DetailviewService) { }
  //Add to cart
  detail:Detailview={
    id:0,
    pname:'',
    product_code:'',
    pdesc:'',
    price:0,
    pimage:'', 
  }
  addToCart(product:any){
    this.detail.pname=product.pname;
    this.detail.product_code=product.product_code;
    this.detail.pdesc=product.pdesc;
    this.detail.price=product.price;
    this.detail.pimage=product.pimage;
    this.detail.id=product.id;
    this.detsvc.addToCart(this.detail);
    console.log(product.id);
    
   // this.detsvc.getCount();
  }
  alll:any=(all as any).default;
  // @Input()product:any
  ngOnInit(): void {
  }

}
