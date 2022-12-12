import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommentsService } from '../comments.service';
import { OfferComment } from '../offer-comment.model';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  public offer: Offer;
  public comments: OfferComment[];

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private commentsService: CommentsService,
    public authService : AuthenticationService) {
    let id: string = this.route.snapshot.params['id'];
    this.offer = this.offersService.getOffer(id);
    this.comments = this.commentsService.getComments(id);
  }

  ngOnInit(): void {
  }

}
