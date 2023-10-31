import { Component } from '@angular/core';
import { OrganisationsService } from 'src/app/services/api/organisations/organisations.service';
import { IOrganisation } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss'],
})
export class OrganisationsComponent {
  modalId: string = 'organisationsFormModal';

  constructor(
    public organisationsService: OrganisationsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    await this.organisationsService.getOrganisations();
  }

  ngOnDestroy() {
    this.organisationsService.organisations = [];
  }

  ngAfterViewInit() {
    this.startListener();
  }

  async onDelete(orgId: string) {
    if (confirm('Are you sure you want to delete this organisation?')) {
      this.globals.spinner.show();
      const resp: any = await this.organisationsService.deleteOrganisations(
        orgId
      );
      this.globals.spinner.hide();
      this.globals.toast.success(resp.message);
      await this.organisationsService.getOrganisations();
    }
  }

  async onSubmit(org: IOrganisation) {
    this.globals.spinner.show();
    this.organisationsService.organisation?._id
      ? await this.organisationsService.updateOrganisations(org)
      : await this.organisationsService.postOrganisations(org);
    await this.organisationsService.getOrganisations();
    this.globals.spinner.hide();
  }

  startListener() {
    let tableResponsive = document.querySelector('.table-responsive');
    if (tableResponsive) {
      tableResponsive.addEventListener('scroll', (e) => {
        let target = e.target as HTMLElement;
        let scrollTop = target.scrollTop;
        let thead = document.getElementById('table-header');
        if (scrollTop + 100 >= 200) {
          thead?.classList.add('shadow');
        } else thead?.classList.remove('shadow');
      });
    }
  }

  resetData() {
    this.organisationsService.organisation = null;
  }

  async search(event: any) {
    this.organisationsService.organisationsPagination.search =
      event.target.value;
    setTimeout(async () => {
      this.globals.spinner.show();
      await this.organisationsService.getOrganisations();
      this.globals.spinner.hide();
    }, 1500);
  }
}
