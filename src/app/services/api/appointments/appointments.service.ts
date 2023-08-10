import { Injectable } from '@angular/core';
import { IAppointment } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  appointments: IAppointment[] = [];
  appointment: IAppointment | null = null;
  appointmentsPagination = {
    page: 1,
    itemsPerPage: 10,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };
  dashboard = {
    totalAppointments: 0,
  };

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getAppointments() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `appointments?page=${this.appointmentsPagination.page}&itemsPerPage=${this.appointmentsPagination.itemsPerPage}&search=${this.appointmentsPagination.search}&sortBy=${this.appointmentsPagination.sortBy}&order=${this.appointmentsPagination.order}`
        );
        this.appointments = resp.data as IAppointment[];
        this.appointmentsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getAppointmentsByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `appointments-by-organisation?page=${this.appointmentsPagination.page}&itemsPerPage=${this.appointmentsPagination.itemsPerPage}&search=${this.appointmentsPagination.search}&sortBy=${this.appointmentsPagination.sortBy}&order=${this.appointmentsPagination.order}`
        );
        this.appointments = resp.data as IAppointment[];
        this.appointmentsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getAllAppointments() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `appointments?page=${this.appointmentsPagination.page}&itemsPerPage=${this.appointmentsPagination.itemsPerPage}&search=${this.appointmentsPagination.search}&sortBy=${this.appointmentsPagination.sortBy}&order=${this.appointmentsPagination.order}`
        );
        this.appointments = resp.data as IAppointment[];
        this.appointmentsPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async deleteAppointment(id: string) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        await this.api.delete(`appointments/${id}`);
        this.globals.spinner.hide();
        this.globals.toast.success('Appointment deleted successfully');
        resolve(true);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async postAppointment(appointment: IAppointment) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        await this.api.post(`appointments`, appointment);
        this.globals.spinner.hide();
        this.globals.toast.success('Appointment created successfully');
        resolve(true);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async updateAppointment(appointment: IAppointment) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        await this.api.update(`appointments/${appointment._id}`, appointment);
        this.globals.spinner.hide();
        this.globals.toast.success('Appointment updated successfully');
        resolve(true);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getAppointmentsTotalByOrganisation() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(
          `appointments-total-by-organisation`
        );
        this.dashboard.totalAppointments = resp.data;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  async getAppointmentsTotal() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(`appointments-total`);
        this.dashboard.totalAppointments = resp.data;
        resolve(resp);
      } catch (error: any) {
        reject(error);
      }
    });
  }
}
