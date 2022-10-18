import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  userapi=environment.userapi;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

  }

}
