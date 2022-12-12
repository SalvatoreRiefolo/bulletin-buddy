import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  public offer: Offer;
  constructor(private route: ActivatedRoute, private offersService: OffersService) {
    let id: string = this.route.snapshot.params['id'];
    this.offer = this.offersService.getOffer(id);
  }

  ngOnInit(): void {
  }

}
