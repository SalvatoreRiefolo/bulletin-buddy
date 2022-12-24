import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offerServiceUrl } from './global';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  body: string;

  constructor(private http: HttpClient) {
    this.body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
  }

  getTopOffers() {
    console.log(offerServiceUrl)
    return this.http.get<Offer[]>(offerServiceUrl + 'offers/');
  }

  getOverviewOffers() {
    return this.http.get<Offer[]>(offerServiceUrl + 'offers/');

  }

  getOffer(id: string) {
       return this.http.get<Offer>(offerServiceUrl + 'offers/' + id);
  }
}
