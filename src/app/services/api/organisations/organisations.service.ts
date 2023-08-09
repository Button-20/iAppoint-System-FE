import { Injectable } from '@angular/core';
import { IOrganisation } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class OrganisationsService {
  organisations: IOrganisation[] = [];

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getOrganisations() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get('organisations');
        this.organisations = resp.data;
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }
}
