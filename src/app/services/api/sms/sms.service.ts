import { Injectable } from '@angular/core';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class SmsService {
  constructor(private api: RequestService, private globals: GlobalsService) {}

  async sendBulkSms(data: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post(`send-sms`, data);
        this.globals.toast.success(resp.message);
        this.globals.spinner.hide();
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        reject(error);
      }
    });
  }
}
