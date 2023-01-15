import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from '../authentication.service';

import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let validEmail: string = "valid@email.com";
  class MockAuthenticationService {
    validateEmail(email: string) {
      if(email === validEmail)
        return of(true);
      else
        return of(false);
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers:[
      { provide: AuthenticationService, useClass: MockAuthenticationService },

    ]})
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate email', () => {
    component.passwordForm.value.email = validEmail;
    component.emailChanged();
    expect(component.validEmail).toBeTruthy();
  });
  it('should not validate email', () => {
    component.emailChanged();
    expect(component.validEmail).toBeFalsy();
  });
});
