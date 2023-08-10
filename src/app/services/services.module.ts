import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppointmentsService } from './api/appointments/appointments.service';
import { UsersService } from './api/users/users.service';
import { GlobalsService } from './core/globals';
import { RequestService } from './core/request';
import { CustomersService } from './api/customers/customers.service';
import { OrganisationsService } from './api/organisations/organisations.service';
import { SmsService } from './api/sms/sms.service';

const components: Array<any> = [
  UsersService,
  GlobalsService,
  RequestService,
  AppointmentsService,
  CustomersService,
  OrganisationsService,
  SmsService
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [...components],
})
export class ServicesModule {}
