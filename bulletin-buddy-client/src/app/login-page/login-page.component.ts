import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public password: string;
  public email: string;
  constructor(private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login(this.password, this.email);
  }
  ngOnInit(): void {
  }

}
