import { Injectable } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor() { }

  getTopOffers(): Offer[] {
    // TODO: create TopOffers backend microservice and use it here
    let result : Offer[] = [];
    result.push({title: "Offer1", description: "description1", userEmail: "userEmail1@a.b", commentThreadId: "1"});
    result.push({title: "Offer2", description: "description2", userEmail: "userEmail2@a.b", commentThreadId: "2"});
    result.push({title: "Offer3", description: "description3", userEmail: "userEmail3@a.b", commentThreadId: "3"});
    return result;
  }
  getOverviewOffers() : Offer[] {
    let result : Offer[] = [];
    result.push({title: "Offer1", description: "description1", userEmail: "userEmail1@a.b", commentThreadId: "1"});
    result.push({title: "Offer2", description: "description2", userEmail: "userEmail2@a.b", commentThreadId: "2"});
    result.push({title: "Offer3", description: "description3", userEmail: "userEmail3@a.b", commentThreadId: "3"});
    result.push({title: "Offer4", description: "description4", userEmail: "userEmail4@a.b", commentThreadId: "4"});
    result.push({title: "Offer5", description: "description5", userEmail: "userEmail5@a.b", commentThreadId: "5"});
    result.push({title: "Offer6", description: "description6", userEmail: "userEmail6@a.b", commentThreadId: "6"});

    return result;
  }
}
