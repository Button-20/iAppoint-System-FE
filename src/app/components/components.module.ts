import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentFormComponent } from './form/appointment-form/appointment-form.component';
import { BulksmsFormComponent } from './form/bulksms-form/bulksms-form.component';
import { CustomerFormComponent } from './form/customer-form/customer-form.component';
import { ForgotPasswordFormComponent } from './form/forgot-password-form/forgot-password-form.component';
import { PaymentFormComponent } from './form/payment-form/payment-form.component';
import { ResetPasswordFormComponent } from './form/reset-password-form/reset-password-form.component';
import { SigninFormComponent } from './form/signin-form/signin-form.component';
import { StaffFormComponent } from './form/staff-form/staff-form.component';
import { TicketFormComponent } from './form/ticket-form/ticket-form.component';
import { UserFormComponent } from './form/user-form/user-form.component';
import { ModalComponent } from './ui/modal/modal.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { OrganisationFormComponent } from './form/organisation-form/organisation-form.component';

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
  ForgotPasswordFormComponent,
  ResetPasswordFormComponent,
  TicketFormComponent,OrganisationFormComponent
];

@NgModule({
  declarations: components,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: components,
})
export class ComponentsModule {}
