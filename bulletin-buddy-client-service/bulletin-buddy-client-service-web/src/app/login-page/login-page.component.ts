import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // prefill form with data for configured test user to make dev easier
  // later to be removed
  public password: string = 'test';
  public email: string = 'test@test.com';
  constructor(private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login(this.password, this.email);
  }

  ngOnInit(): void {
  }

}
