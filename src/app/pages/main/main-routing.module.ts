import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BulkSmsComponent } from './bulk-sms/bulk-sms.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { PaymentsComponent } from './payments/payments.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Dashboard' },
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: { title: 'Customers' },
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        data: { title: 'Appointments' },
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { title: 'Users' },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: { title: 'Staff' },
      },
      {
        path: 'bulk-sms',
        component: BulkSmsComponent,
        data: { title: 'Bulk SMS' },
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: { title: 'Payments' },
      },
      {
        path: 'tickets',
        component: TicketsComponent,
        data: { title: 'Tickets' },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
