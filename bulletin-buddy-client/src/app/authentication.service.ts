import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  register(email: string, password: string) {
    let user = {
      name: email,
      password: password
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // maybe needed for future: 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'
    });
    const options = {
      headers
    };
    return this.http.post<boolean>(authenticationServiceUrl + 'authentication', user, options)
      .subscribe((success: boolean) => {
        if (success) {
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
  validateEmail(email: string) {
    return this.http.get<boolean>(authenticationServiceUrl + `authentication/validate?name=${email}`);
  }
}
