import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/app/components/components.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    UsersComponent,
    StaffComponent,
    AppointmentsComponent,
    CustomersComponent,
  ],
  imports: [CommonModule, MainRoutingModule, ComponentsModule],
})
export class MainModule {}
