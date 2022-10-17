import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Detailview } from '../detailview';
import { DetailviewService } from '../detailviewService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uniforms',
  templateUrl: './uniforms.component.html',
  styleUrls: ['./uniforms.component.css']
})
export class UniformsComponent implements OnInit {

  constructor(private detailservice:DetailviewService, private router: Router) { }

  ngOnInit(): void {
     
  }

detail:Detailview={
  id:0,
  pname:'',
  product_code: '',
  pdesc:'',
  psoldby:'',
  price:0,
  pimg:''
}
 


  detailview(detailviewProd: (string | undefined)[])
  {
    this.detail.id=detailviewProd[0];
    this.detail.pname = detailviewProd[1];
    this.detail.product_code=detailviewProd[2];
    this.detail.pdesc=detailviewProd[3];
    this.detail.psoldby=detailviewProd[4];
    this.detail.price=detailviewProd[5];
    this.detail.pimg=detailviewProd[6];
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(detailviewProd);
    const navigationExtras: NavigationExtras = {queryParams};
    this.router.navigate(['detailview'], navigationExtras);
    // this.detailservice.addToDetalview(this.detail);
    console.log(detailviewProd[0]);
    }

  //   delete(deleteItem: Detailview) {
  //     console.log("product deleted id in unifom view : " + this.detail.id)
  //     this.detailservice.removeItemFromDetailview(deleteItem).subscribe(
  //       () => console.log(deleteItem.pname)
  //     );
  // }

}
