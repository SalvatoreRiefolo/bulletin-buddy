import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public password: string;
  public email: string;

  constructor(private appService: AppService) { }

  login() {
    this.appService.login(this.password, this.email);
  }

  ngOnInit(): void {
  }

}
