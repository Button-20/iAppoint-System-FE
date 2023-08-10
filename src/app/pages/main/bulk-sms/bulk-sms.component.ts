import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { SmsService } from 'src/app/services/api/sms/sms.service';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-bulk-sms',
  templateUrl: './bulk-sms.component.html',
  styleUrls: ['./bulk-sms.component.scss'],
})
export class BulkSmsComponent {
  customers: Array<string> = [];
  customerInput: string = '';
  constructor(
    private smsService: SmsService,
    public customersService: CustomersService,
    public usersService: UsersService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {}

  ngOnDestroy() {
    this.customers = [];
  }

  async sendBulkSms(event: any) {
    await this.smsService.sendBulkSms(event);
    this.customerInput = '';
  }

  async sendBulkSmsToAll() {
    let resp: any;
    switch (this.globals.user.role) {
      case 'super_admin':
        this.globals.spinner.show();
        resp = await this.customersService.getCustomers();
        this.customers = resp.data.map(
          (customer: { phone: string; phone_alt: string }) =>
            customer.phone || customer.phone_alt || ''
        );
        this.customerInput = this.customers.join(',');
        this.globals.spinner.hide();
        break;
      case 'user':
        this.globals.spinner.show();
        resp = await this.customersService.getCustomersByOrganisation();
        this.customers = resp.data.map(
          (customer: { phone: string; phone_alt: string }) =>
            customer.phone || customer.phone_alt || ''
        );
        this.customerInput = this.customers.join(',');
        this.globals.spinner.hide();
        break;
    }
  }

  async sendBulkSmsToUsers() {
       let resp: any;
       switch (this.globals.user.role) {
         case 'super_admin':
           this.globals.spinner.show();
           resp = await this.usersService.getUsers();
           this.customers = resp.data.map(
             (customer: { phone: string; phone_alt: string }) =>
               customer.phone || customer.phone_alt || ''
           );
           this.customerInput = this.customers.join(',');
           this.globals.spinner.hide();
           break;
         case 'user':
           this.globals.spinner.show();
           resp = await this.usersService.getStaff();
           this.customers = resp.data.map(
             (customer: { phone: string; phone_alt: string }) =>
               customer.phone || customer.phone_alt || ''
           );
           this.customerInput = this.customers.join(',');
           this.globals.spinner.hide();
           break;
       }

  }


  setCustomer(event: any) {
    this.customerInput = event.target.value;
    this.customers = this.customerInput.split(',');
  }
}
