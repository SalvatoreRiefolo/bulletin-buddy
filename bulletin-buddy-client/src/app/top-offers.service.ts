import { Injectable } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class TopOffersService {

  body: string;

  constructor() {
    this.body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
  }

  getTopOffers(): Offer[] {
    // TODO: create TopOffers backend microservice and use it here

    let result : Offer[] = [];
    result.push({title: "First offer", body: this.body, userEmail: "userEmail1@a.b", timestamp: new Date()});
    result.push({title: "Second offer", body: this.body, userEmail: "userEmail2@a.b", timestamp: new Date()});
    result.push({title: "Third offer", body: this.body, userEmail: "userEmail3@a.b", timestamp: new Date()});
    return result;
  }
}
