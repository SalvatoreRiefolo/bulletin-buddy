import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public offersService: OffersService, public authenticationService: AuthenticationService) { }

logout() : void{
  this.authenticationService.logout();
}
ngOnInit(): void {
}

}
