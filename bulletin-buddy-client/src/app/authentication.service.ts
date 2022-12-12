import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = false;
  private email = "";

  constructor() { }
  login(password: string, email: string) {
    this.loggedIn = true;
    this.email = email;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  logout() {
    this.loggedIn = false;
    this.email = "";
  }
  getUserEmail(): string {
    return this.email;
  }
}
