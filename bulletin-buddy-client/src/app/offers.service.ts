import { Injectable } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  body: string;

  constructor() {
    this.body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
  }

  getTopOffers(): Offer[] {
    // TODO: create TopOffers backend microservice and use it here

    let result : Offer[] = [];
    result.push({id: "1", title: "First offer", body: this.body, userEmail: "userEmail1@a.b", timestamp: new Date()});
    result.push({id: "2", title: "Second offer", body: this.body, userEmail: "userEmail2@a.b", timestamp: new Date()});
    result.push({id: "3", title: "Third offer", body: this.body, userEmail: "userEmail3@a.b", timestamp: new Date()});
    return result;
  }
  getOverviewOffers() : Offer[] {
    let result : Offer[] = [];
    result.push({id: "1",title: "First offer", body: this.body, userEmail: "userEmail1@a.b", timestamp: new Date()});
    result.push({id: "2",title: "Second offer", body: this.body, userEmail: "userEmail2@a.b", timestamp: new Date()});
    result.push({id: "3",title: "Third offer", body: this.body, userEmail: "userEmail3@a.b", timestamp: new Date()});
    result.push({id: "4",title: "fourth offer", body: this.body, userEmail: "userEmail3@a.b", timestamp: new Date()});
    result.push({id: "5",title: "fifth offer", body: this.body, userEmail: "userEmail3@a.b", timestamp: new Date()});
    return result;
  }
  getOffer(id: string) : Offer {
    let body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
    return { id: id, title: "random offer", body: body, userEmail: "userEmail1@a.b", timestamp: new Date() };

  }
}
