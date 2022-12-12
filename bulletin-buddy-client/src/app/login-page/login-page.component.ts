import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public password: string;
  public email: string;
  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.password, this.email);
  }
  ngOnInit(): void {
  }

}
