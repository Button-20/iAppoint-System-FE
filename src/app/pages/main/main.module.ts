import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BulkSmsComponent } from './bulk-sms/bulk-sms.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { PaymentsComponent } from './payments/payments.component';
import { StaffComponent } from './staff/staff.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    UsersComponent,
    StaffComponent,
    AppointmentsComponent,
    CustomersComponent,
    BulkSmsComponent,
    PaymentsComponent,
    TicketsComponent,
    OrganisationsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
    NgApexchartsModule,
  ],
})
export class MainModule {}
