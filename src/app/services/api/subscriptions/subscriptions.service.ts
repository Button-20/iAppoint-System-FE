import { Injectable } from '@angular/core';
import { ISubscription } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  subscriptions: ISubscription[] = [];

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getSubscriptions() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.get('subscriptions');
        this.subscriptions = resp.data;
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
