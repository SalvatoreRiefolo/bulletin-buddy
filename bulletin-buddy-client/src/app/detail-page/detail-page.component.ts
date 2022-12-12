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
  public commentInput: string;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private commentsService: CommentsService,
    public authService: AuthenticationService) {
    this.id = this.route.snapshot.params['id'];
    this.offer = this.offersService.getOffer(this.id);
    this.comments = this.commentsService.getComments(this.id);
  }
  addComment() {
    this.commentsService.addComment({
      text: this.commentInput,
      offerId: this.id,
      userEmail: this.authService.getUserEmail(),
      timestamp: new Date()
    });
    console.log(this.commentInput);
    this.comments = this.commentsService.getComments(this.id);
  }
  ngOnInit(): void {
  }

}
