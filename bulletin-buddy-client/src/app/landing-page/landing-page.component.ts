import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private offersService: OffersService, private authenticationService: AuthenticationService) { }
  
  getTopOffers() : Offer[] {
    return this.offersService.getTopOffers();
  }

  isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout();
  }
  ngOnInit(): void {
  }

}
