import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TopOffersService } from '../top-offers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public topOffersService: TopOffersService, public authenticationService: AuthenticationService) { }

logout() : void{
  this.authenticationService.logout();
}
ngOnInit(): void {
}

}
