import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent {
  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.onSubmitEvent.emit(this.forgotPasswordForm.value.email);
    }
  }

  get email() {
    return this.forgotPasswordForm.get('email') as FormControl;
  }
}
