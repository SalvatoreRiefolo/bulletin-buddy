import { Component, OnInit } from '@angular/core';
import { TopOffersService } from '../top-offers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public topOffersService :TopOffersService) { }

  ngOnInit(): void {
  }

}
