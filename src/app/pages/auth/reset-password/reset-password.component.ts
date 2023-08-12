import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  token: string = '';

  constructor(
    private globals: GlobalsService,
    private usersService: UsersService
  ) {
    this.token = this.globals.router.url.split('/').pop() || '';
  }

  async onSubmit(formData: any) {
    await this.usersService.resetPassword(formData);
    this.globals.router.navigate(['auth/login']);
  }
}
