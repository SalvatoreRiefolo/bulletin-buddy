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
  offers: Offer[] = [];
  constructor(private offersService: OffersService, private authenticationService: AuthenticationService) {
    this.offersService.getTopOffers().subscribe((data: Offer[]) => {
      this.offers = data;
    });
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout();
  }
  ngOnInit(): void {
  }

}
