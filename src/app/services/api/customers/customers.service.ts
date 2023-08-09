import { Injectable } from '@angular/core';
import { ICustomer } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customers: ICustomer[] = [];
  customer: ICustomer | null = null;
  customersPagination = {
    page: 1,
    itemsPerPage: 10,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getCustomersByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(
          `customers-by-organisation?page=${this.customersPagination.page}&itemsPerPage=${this.customersPagination.itemsPerPage}&search=${this.customersPagination.search}&sortBy=${this.customersPagination.sortBy}&order=${this.customersPagination.order}`
        );
        this.customers = resp.data;
        this.customersPagination.totalItemsCount = resp.totalItemsCount;
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async postCustomer(customer: ICustomer) {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.post('customers', customer);
        this.globals.toast.success(resp.message);
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async updateCustomer(customer: ICustomer) {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.update(
          `customers/${customer._id}`,
          customer
        );
        this.globals.toast.success(resp.message);
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async deleteCustomer(customerId: string) {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.delete(`customers/${customerId}`);
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }
}
