import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CustomersComponent } from './customers/customers.component';

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
