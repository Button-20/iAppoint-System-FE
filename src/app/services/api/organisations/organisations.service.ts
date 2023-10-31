import { Injectable } from '@angular/core';
import { IOrganisation } from '../../core/IApp';
import { GlobalsService } from '../../core/globals';
import { RequestService } from '../../core/request';

@Injectable({
  providedIn: 'root',
})
export class OrganisationsService {
  organisations: IOrganisation[] = [];

  organisation: IOrganisation | null = null;

  organisationsPagination = {
    search: '',
  };

  constructor(private api: RequestService, private globals: GlobalsService) {}

  async getOrganisations() {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.get(
          `organisations?search=${this.organisationsPagination.search}`
        );
        this.organisations = resp.data;
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }

  async postOrganisations(organisation: IOrganisation) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.post(
          'organisation/create',
          organisation
        );
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

  async updateOrganisations(organisation: IOrganisation) {
    return await new Promise(async (resolve, reject) => {
      try {
        this.globals.spinner.show();
        const resp: any = await this.api.update(
          `organisations/${this.organisation?._id}`,
          organisation
        );
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

  async deleteOrganisations(organisationId: string) {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this.api.delete(
          `organisations/${organisationId}`
        );
        resolve(resp);
      } catch (error: any) {
        this.globals.spinner.hide();
        this.globals.toast.error(error);
        reject(error);
      }
    });
  }
}
