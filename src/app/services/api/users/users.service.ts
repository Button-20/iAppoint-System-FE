import { Injectable } from '@angular/core';
import { Auth, IUser } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersPagination = {
    page: 1,
    itemsPerPage: 10,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };
  staffPagination = {
    page: 1,
    itemsPerPage: 10,
    totalItemsCount: 0,
    search: '',
    sortBy: 'createdAt',
    order: 'DESC',
  };
  users: IUser[] = [];
  user: IUser | null = null;
  staffs: IUser[] = [];
  staff: IUser | null = null;

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async login(formData: Auth) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post('login', formData);
        this.globals.storage.setAccessToken(resp.token);
        this.globals.storage.setUserDetails(resp.data);
        this.globals.user = resp.data;
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async postUser(formData: IUser) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post('register', formData);
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async postStaff(formData: IUser) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post('staff', formData);
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async updateUser(formData: IUser) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.update(
          `users/${formData._id}`,
          formData
        );
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getUsers() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `users?page=${this.usersPagination.page}&itemsPerPage=${this.usersPagination.itemsPerPage}&search=${this.usersPagination.search}&sortBy=${this.usersPagination.sortBy}&order=${this.usersPagination.order}`
        );
        this.users = resp.data;
        this.usersPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async getStaff() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get(
          `staff?page=${this.usersPagination.page}&itemsPerPage=${this.usersPagination.itemsPerPage}&search=${this.usersPagination.search}&sortBy=${this.usersPagination.sortBy}&order=${this.usersPagination.order}`
        );
        this.staffs = resp.data;
        this.staffPagination.totalItemsCount = resp.totalItemsCount;
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async deleteUser(userId: string) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.delete(`users/${userId}`);
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }
}
