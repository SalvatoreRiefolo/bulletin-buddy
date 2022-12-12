import { Injectable } from '@angular/core';
import { OfferComment } from './offer-comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  result: OfferComment[] = [];
  constructor() { }
  getComments(id: string): OfferComment[] {
    let result: OfferComment[] = [];
    result.push({ offerId: id, text: "I am interested", userEmail: "userEmail1@a.b", timestamp: new Date() });
    result.push({ offerId: id, text: "Me too!", userEmail: "userEmail2@a.b", timestamp: new Date() });
    result.push({ offerId: id, text: "I can beat your offers", userEmail: "userEmail3@a.b", timestamp: new Date() });
    result.push({ offerId: id, text: "Hey hey chill guys", userEmail: "userEmail1@a.b", timestamp: new Date() });
    return result;
  }
  addComment(comment : OfferComment) {

  }
}
