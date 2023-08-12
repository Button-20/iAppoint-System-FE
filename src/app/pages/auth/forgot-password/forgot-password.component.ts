import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(
    private usersService: UsersService
  ) {}

  async onSubmit(formData: any) {
    await this.usersService.forgotPassword(formData);
  }
}
