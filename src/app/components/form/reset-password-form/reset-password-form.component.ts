import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/app/services/validators/validator';

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  @Input() token: string = '';

  resetPasswordForm: FormGroup = new FormGroup(
    {
      token: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: Validation.match('password', 'confirmPassword') }
  );

  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnChanges() {
    this.resetPasswordForm.patchValue({ token: this.token });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.onSubmitEvent.emit(this.resetPasswordForm.value);
    }
  }

  get email() {
    return this.resetPasswordForm.get('email') as FormControl;
  }

  get password() {
    return this.resetPasswordForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword') as FormControl;
  }
}
