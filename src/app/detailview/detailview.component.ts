import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Detailview } from '../detailview';
import { DetailviewService } from '../detailviewService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  arrayOfValues: Array<string>;


  constructor(private detailserv: DetailviewService, private router: Router, private activatedRoute: ActivatedRoute) {
   const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.arrayOfValues = new Array<string>();
    } else {
      this.arrayOfValues = JSON.parse(myArray);
      console.log("Type is : " +typeof(this.arrayOfValues));
    }
   }

  detail:Detailview =
  {
    id:0,
    pname:'',
    product_code: '',
    pdesc:'',
    psoldby:'',
    price:0,
    pimg:''
  }

  detialViewData: any = [];

  // @ViewChild(Selector: 'container', opts:{read: ViewContainerRef}) 

  ngOnInit(): void {
    // this.detailserv.getDetailview().subscribe(
    //   (response) =>{
    //     this.detailview= response;
    //     console.log(this.detailview)
    //   }
    //   )

  }
  detailview: Detailview[] = [];


}
