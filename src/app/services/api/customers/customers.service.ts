import { Injectable } from '@angular/core';
import { ChartOptions } from 'src/app/pages/main/home/home.component';
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

  dashboard = {
    totalCustomers: 0,
  };

  chartOptions: ChartOptions | any;
  columnChartOptions: ChartOptions | any;

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

  async getCustomers() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(
          `customers?page=${this.customersPagination.page}&itemsPerPage=${this.customersPagination.itemsPerPage}&search=${this.customersPagination.search}&sortBy=${this.customersPagination.sortBy}&order=${this.customersPagination.order}`
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

  async getCustomerTotalByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(`customers-total-by-organisation`);
        this.dashboard.totalCustomers = resp.data;
        this.columnChartOptions = resp.chartOptions;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  async getCustomerTotal() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(`customers-total`);
        this.dashboard.totalCustomers = resp.data;
        this.columnChartOptions = resp.chartOptions;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  async getGenderChart() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(`gender-chart`);
        this.chartOptions = resp.data;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  async getGenderChartByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(`gender-chart-by-organisation`);
        this.chartOptions = resp.data;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }
}
