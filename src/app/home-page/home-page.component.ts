import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  livedate= new Date();


  constructor(    private firstHome: FirstServiceService
    ) { }

  ngOnInit(): void {
  }
  }
