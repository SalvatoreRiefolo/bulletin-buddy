import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  constructor(private offersService : OffersService, public authenticationService : AuthenticationService) { }

  getOffers() : Offer[] {
    return this.offersService.getOverviewOffers();
  }
  

  ngOnInit(): void {
  }

}
