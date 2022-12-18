import { Injectable } from '@angular/core';
import { OfferComment } from './offer-comment.model';
import { commentServiceUrl } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments(id: string) {
    return this.http.get<OfferComment[]>(commentServiceUrl + 'comments/' + id);
  }
  addComment(comment: OfferComment) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // maybe needed for future: 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'
    });
    const options = {
      headers
    };
    return this.http.post<OfferComment>(commentServiceUrl + 'comments/', comment, options);

  }
}
