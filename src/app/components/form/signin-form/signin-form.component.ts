import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
  signinForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    rememberMe: new FormControl(false),
  });

  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onSubmit() {
    if (this.signinForm.valid) {
      this.onSubmitEvent.emit(this.signinForm.value);
    }
  }

  get email() {
    return this.signinForm.get('email') as FormControl;
  }

  get password() {
    return this.signinForm.get('password') as FormControl;
  }
}
