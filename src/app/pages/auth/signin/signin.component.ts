import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(
    private globals: GlobalsService,
    private usersService: UsersService
  ) {}

  async onSubmit(formData: any) {
    await this.usersService.login(formData);
    this.globals.router.navigate(['/main/home']);
  }
}
