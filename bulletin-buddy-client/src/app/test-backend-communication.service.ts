import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestBackendCommunicationService {

  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = 'http://localhost:8081/';
  }

  public getTestComments() : Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backendUrl);    
  }
}
