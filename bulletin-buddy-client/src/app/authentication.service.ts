import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = false;

  constructor() { }
  login(password: string, email: string) {
    this.loggedIn = true;
  }
  isLoggedIn() : boolean {
    return this.loggedIn;
  }
  logout() {
    this.loggedIn = false;
  }
}