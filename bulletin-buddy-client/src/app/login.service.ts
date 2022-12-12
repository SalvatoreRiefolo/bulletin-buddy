import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;

  constructor() { }
  login(password: string, email: string) {
    
/*
  this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
          this.loggedIn = true;
      } else {
          this.loggedIn = false;
      }
      */
  }
  isLoggedIn() : boolean {
    return this.loggedIn;
  }
}
