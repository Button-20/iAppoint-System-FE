import { Component } from '@angular/core';
import { AppointmentsService } from 'src/app/services/api/appointments/appointments.service';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public customersService: CustomersService,
    public usersService: UsersService,
    public appointmentsService: AppointmentsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    switch (this.globals.user.role) {
      case 'super_admin':
        this.globals.spinner.show();
        await this.customersService.getCustomerTotal();
        await this.usersService.getUsersTotal();
        await this.appointmentsService.getAppointmentsTotal();
        this.globals.spinner.hide();
        break;
      case 'user':
        this.globals.spinner.show();
        await this.customersService.getCustomerTotalByOrganisation();
        await this.usersService.getUsersTotalByOrganisation();
        await this.appointmentsService.getAppointmentsTotalByOrganisation();
        this.globals.spinner.hide();
        break;
      default:
        break;
    }
  }
}
