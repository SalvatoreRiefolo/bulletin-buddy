import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private authenticationServiceUrl = "/authenticationservice/"
  private loggedIn = false;
  private email = "";

  constructor(private http: HttpClient, private router: Router) { }

  login(passwd: string, email: string) {
    return this.http.get<boolean>(this.authenticationServiceUrl + `authentication?name=${email}&passwd=${passwd}`)
      .subscribe((login: boolean) => {
        if (login) {
          this.loggedIn = true;
          this.email = email;
        }

        this.router.navigate(['/overview']);
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
    return this.http.post<boolean>(this.authenticationServiceUrl + 'authentication', user, options)
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
    return this.http.get<boolean>(this.authenticationServiceUrl + `authentication/validate?name=${email}`);
  }
}
