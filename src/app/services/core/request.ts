import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url: string = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  async get(routes: string) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.http.get(this.url + routes).subscribe(
          (res: any) => {
            resolve(res);
          },
          ({ error }: any) => {
            reject(error.message);
          }
        );
      } catch (ex: any) {
        reject(ex.error.message || ex.message || ex);
      }
    });
  }

  async post(routes: string, data: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.http.post(this.url + routes, data).subscribe(
          (res: any) => {
            resolve(res);
          },
          ({ error }: any) => {
            reject(error.message);
          }
        );
      } catch (ex: any) {
        reject(ex.error.message || ex.message || ex);
      }
    });
  }

  async update(routes: string, data?: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.http.put(this.url + routes, data).subscribe(
          (res: any) => {
            resolve(res);
          },
          ({ error }: any) => {
            reject(error.message);
          }
        );
      } catch (ex: any) {
        reject(ex.error.message || ex.message || ex);
      }
    });
  }

  async delete(routes: string, data: any = {}) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.http.delete(this.url + routes, data).subscribe(
          (res: any) => {
            resolve(res);
          },
          ({ error }: any) => {
            reject(error.message);
          }
        );
      } catch (ex: any) {
        reject(ex.error.message || ex.message || ex);
      }
    });
  }

  async patch(routes: string, data: any = {}) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.http.patch(this.url + routes, data).subscribe(
          (res: any) => {
            resolve(res);
          },
          ({ error }: any) => {
            reject(error.message);
          }
        );
      } catch (ex: any) {
        reject(ex.error.message || ex.message || ex);
      }
    });
  }
}
