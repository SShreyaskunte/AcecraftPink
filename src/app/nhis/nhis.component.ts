import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nhis',
  templateUrl: './nhis.component.html',
  styleUrls: ['./nhis.component.css']
})
export class NHISComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  child()
  {
    this.router.navigate(['/nhissize'])
  }

}
