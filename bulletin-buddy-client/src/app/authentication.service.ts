import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authenticationServiceUrl } from './global';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = false;
  private email = "";

  constructor(private http: HttpClient) { }
  login(passwd: string, email: string) {
    return this.http.get<boolean>(authenticationServiceUrl + `authentication?name=${email}&passwd=${passwd}`)
      .subscribe((login: boolean) => {
        if (login) {
          this.loggedIn = true;
          this.email = email;
        }
      });
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
