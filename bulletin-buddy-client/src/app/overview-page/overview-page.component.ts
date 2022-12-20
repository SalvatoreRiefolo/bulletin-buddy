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
  public offers: Offer[] = [];

  constructor(private offersService: OffersService, public authenticationService: AuthenticationService) {
    this.offersService.getOverviewOffers().subscribe((data: Offer[]) => {
      this.offers = data;
    });
  }

  ngOnInit(): void {
  }

}
