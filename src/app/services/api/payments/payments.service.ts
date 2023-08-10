import { Injectable } from '@angular/core';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  payments: Array<any> = [];
  paymentsPagination = {
    page: 1,
    itemsPerPage: 5,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getPaymentsByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `payments-by-organisation?page=${this.paymentsPagination.page}&itemsPerPage=${this.paymentsPagination.itemsPerPage}&search=${this.paymentsPagination.search}&sortBy=${this.paymentsPagination.sortBy}&order=${this.paymentsPagination.order}`
        );
        this.payments = resp.data;
        this.paymentsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getPayments() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `payments?page=${this.paymentsPagination.page}&itemsPerPage=${this.paymentsPagination.itemsPerPage}&search=${this.paymentsPagination.search}&sortBy=${this.paymentsPagination.sortBy}&order=${this.paymentsPagination.order}`
        );
        this.payments = resp.data;
        this.paymentsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async createPayment(data: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post(`payments`, data);
        this.globals.spinner.hide();
        this.globals.toast.success(resp.message);
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }
}
