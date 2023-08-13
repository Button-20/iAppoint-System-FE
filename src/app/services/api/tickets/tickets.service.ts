import { Injectable } from '@angular/core';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';
import { ITicket } from '../../core/IApp';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  tickets: Array<ITicket> = [];
  ticket: ITicket | null = null;
  ticketsPagination = {
    page: 1,
    itemsPerPage: 5,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getTicketsByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `tickets-by-organisation?page=${this.ticketsPagination.page}&itemsPerPage=${this.ticketsPagination.itemsPerPage}&search=${this.ticketsPagination.search}&sortBy=${this.ticketsPagination.sortBy}&order=${this.ticketsPagination.order}`
        );
        this.tickets = resp.data;
        this.ticketsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getTickets() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `tickets?page=${this.ticketsPagination.page}&itemsPerPage=${this.ticketsPagination.itemsPerPage}&search=${this.ticketsPagination.search}&sortBy=${this.ticketsPagination.sortBy}&order=${this.ticketsPagination.order}`
        );
        this.tickets = resp.data;
        this.ticketsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async createTicket(data: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post(`tickets`, data);
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

  async updateTicket(data: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.update(`tickets/${data._id}`, data);
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
