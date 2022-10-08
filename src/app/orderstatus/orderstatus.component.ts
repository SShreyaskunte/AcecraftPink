import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  trackNow(){
    alert("We Will Notify Your Status Shortly!!!");
  }

}
