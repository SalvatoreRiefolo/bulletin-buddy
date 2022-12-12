import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TopOffersService } from '../top-offers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public topOffersService: TopOffersService, public appService: AppService) { }

logout() : void{
  this.appService.logout();
}
ngOnInit(): void {
}

}
