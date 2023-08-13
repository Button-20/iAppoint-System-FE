import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { ICustomer } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  modalId: string = 'customerModal';

  constructor(
    public customersService: CustomersService,
    private globals: GlobalsService
  ) {}

  async ngOnInit() {
    this.globals.spinner.show();
    await this.initCustomer();
    this.globals.spinner.hide();
  }

  ngOnDestroy() {
    this.customersService.customers = [];
    this.customersService.customersPagination = {
      page: 1,
      itemsPerPage: 10,
      totalItemsCount: 0,
      search: '',
      sortBy: 'createdAt',
      order: 'DESC',
    };
  }

  ngAfterViewInit() {
    this.startListener();
  }

  async onDelete(userId: string) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.globals.spinner.show();
      const resp: any = await this.customersService.deleteCustomer(userId);
      this.globals.spinner.hide();
      this.globals.toast.success(resp.message);
      await this.initCustomer();
    }
  }

  async onSubmit(customer: ICustomer) {
    this.globals.spinner.show();
    this.customersService.customer?._id
      ? await this.customersService.updateCustomer(customer)
      : await this.customersService.postCustomer(customer);
    await this.initCustomer();
    this.globals.spinner.hide();
  }

  startListener() {
    let tableResponsive = document.querySelector('.table-responsive');
    if (tableResponsive) {
      tableResponsive.addEventListener('scroll', (e) => {
        let target = e.target as HTMLElement;
        let scrollTop = target.scrollTop;
        let thead = document.getElementById('table-header');
        if (scrollTop + 100 >= 200) {
          thead?.classList.add('shadow');
        } else thead?.classList.remove('shadow');
      });
    }
  }

  async search(event: any) {
    this.customersService.customersPagination.search = event.target.value;
    setTimeout(async () => {
      this.globals.spinner.show();
      await this.initCustomer();
      this.globals.spinner.hide();
    }, 1500);
  }

  async onPageChange(page: any) {
    this.customersService.customersPagination.page = page;
    await this.initCustomer();
  }

  async onItemsPerPageChange(itemsPerPage: any) {
    this.customersService.customersPagination.itemsPerPage = itemsPerPage;
    await this.initCustomer();
  }

  async initCustomer() {
    switch (this.globals.user.role) {
      case 'super_admin':
        await this.customersService.getCustomers();
        break;
      case 'user':
        await this.customersService.getCustomersByOrganisation();
        break;
      default:
        break;
    }
  }

  resetData() {
    this.customersService.customer = null;
  }
}
