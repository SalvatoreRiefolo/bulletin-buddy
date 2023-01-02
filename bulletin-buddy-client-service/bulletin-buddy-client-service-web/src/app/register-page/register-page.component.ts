import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public validEmail: boolean = false;
  public passwordForm: FormGroup;
  constructor(private authService: AuthenticationService) {
    this.passwordForm = new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl('', [Validators.required]),
        password_confirm: new FormControl('', [Validators.required]),
      },
      [CustomValidators.MatchValidator('password', 'password_confirm')]
    );
  }

  ngOnInit(): void {
  }

  get passwordMatchError() {
    return (
      this.passwordForm.getError('mismatch') &&
      this.passwordForm.get('password_confirm')?.touched
    );
  }

  register() {
    if(this.passwordForm.invalid || (!this.validEmail)) {
      console.warn("Form invalid!");
    }
    let email = this.passwordForm.value.email;
    let password = this.passwordForm.value.password;

    this.authService.register(email, password);
  }

  emailChanged() {
    let email = this.passwordForm.value.email;
    this.authService.validateEmail(email).subscribe((result: boolean) => {
      if(!result)
      {
        this.validEmail = false;
      }
      else {
        this.validEmail = true;
      }
    })
  }
}
