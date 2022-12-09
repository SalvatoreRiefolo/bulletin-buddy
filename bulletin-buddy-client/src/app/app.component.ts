import { Component } from '@angular/core';
import { TestBackendCommunicationService } from './test-backend-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulletin-buddy-client';
  testStrings: Array<string>;
  constructor(private backendService: TestBackendCommunicationService) {
    this.testStrings = new Array<string>();

    backendService.getTestComments().subscribe(data => this.testStrings = data);
  }
}
