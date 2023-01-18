import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  class MockHttpClient {
    get(url: string) {
      return of(true);
    }
    post(url: string) {
      return of(true);
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login', () => {
    let email: string = "my@email.com";
    service.login("password", email);
    expect(service.getUserEmail()).toEqual(email);
    expect(service.isLoggedIn()).toBeTruthy();
  });
  it('should logout', () => {
    let email: string = "";
    service.logout();
    expect(service.getUserEmail()).toEqual(email);
    expect(service.isLoggedIn()).toBeFalsy();
  });
  it('should register', () => {
    let email: string = "my@email.com";
    service.register(email, "password");
    expect(service.getUserEmail()).toEqual(email);
    expect(service.isLoggedIn()).toBeTruthy();
  });
});
