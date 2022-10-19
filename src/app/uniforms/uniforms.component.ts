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
  option:boolean=false;
  optionSelected:any;
onOptionsSelected(event: any){
    console.log(event.target.value);

    this.optionSelected = event.target.value;
    this.option = true;
}
 

  // detailview(detailviewProd: (string | undefined)[])
  // {
  //   this.detail.id=detailviewProd[0];
  //   this.detail.pname = detailviewProd[1];
  //   this.detail.product_code=detailviewProd[2];
  //   this.detail.pdesc=detailviewProd[3];
  //   this.detail.psoldby=detailviewProd[4];
  //   this.detail.price=detailviewProd[5];
  //   this.detail.pimg=detailviewProd[6];
  //   const queryParams: any = {};
  //   queryParams.myArray = JSON.stringify(detailviewProd);
  //   const navigationExtras: NavigationExtras = {queryParams};
  //   this.router.navigate(['detailview'], navigationExtras);
  //   // this.detailservice.addToDetalview(this.detail);
  //   console.log(detailviewProd[0]);
  //   }

  //   delete(deleteItem: Detailview) {
  //     console.log("product deleted id in unifom view : " + this.detail.id)
  //     this.detailservice.removeItemFromDetailview(deleteItem).subscribe(
  //       () => console.log(deleteItem.pname)
  //     );
  // }

}
