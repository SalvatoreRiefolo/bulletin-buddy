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
    this.comments = [];
    this.id = this.route.snapshot.params['id'];
    this.offersService.getOffer(this.id).subscribe((data: Offer) => {
      this.offer = data;
    });
    this.commentsService.getComments(this.id).subscribe((data: OfferComment[]) => {
      console.log(data);
      this.comments = data;
    });
  }
  addComment() {
    let date = new Date().toLocaleString("en-GB").replace('/', '-').replace('/', '-').replace(',', '');
    let comment: OfferComment = {
      content: this.commentInput,
      offerId: this.id,
      posterEmail: this.authService.getUserEmail(),
      timestamp: date.toString()
    };

    this.commentsService.addComment(comment).subscribe(c => this.comments.push(comment));
  }
  ngOnInit(): void {
  }

}
