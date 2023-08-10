import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentFormComponent } from './form/appointment-form/appointment-form.component';
import { BulksmsFormComponent } from './form/bulksms-form/bulksms-form.component';
import { CustomerFormComponent } from './form/customer-form/customer-form.component';
import { PaymentFormComponent } from './form/payment-form/payment-form.component';
import { SigninFormComponent } from './form/signin-form/signin-form.component';
import { StaffFormComponent } from './form/staff-form/staff-form.component';
import { UserFormComponent } from './form/user-form/user-form.component';
import { ModalComponent } from './ui/modal/modal.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';

const components: Array<any> = [
  SigninFormComponent,
  SidebarComponent,
  NavbarComponent,
  ModalComponent,
  PaginationComponent,
  CustomerFormComponent,
  AppointmentFormComponent,
  UserFormComponent,
  StaffFormComponent,
  BulksmsFormComponent,
  PaymentFormComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: components,
})
export class ComponentsModule {}
