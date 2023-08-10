import { Component } from '@angular/core';
import { AppointmentsService } from 'src/app/services/api/appointments/appointments.service';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { IAppointment } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  modalId: string = 'appointmentFormModal';

  constructor(
    public appointmentsService: AppointmentsService,
    public customersService: CustomersService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    await this.appointmentsService.getAppointments();
    await this.customersService.getCustomersByOrganisation();
  }

  ngOnDestroy() {
    this.appointmentsService.appointments = [];
    this.appointmentsService.appointmentsPagination = {
      page: 1,
      itemsPerPage: 10,
      totalItemsCount: 0,
      search: '',
      sortBy: 'createdAt',
      order: 'DESC',
    };
  }

  ngAfterViewInit() {
    this.startListener();
  }

  async onDelete(id: string) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.globals.spinner.show();
      await this.appointmentsService.deleteAppointment(id);
      this.globals.spinner.hide();
      await this.appointmentsService.getAppointments();
    }
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

  async search(event: any) {
    this.customersService.customersPagination.search = event.target.value;
    setTimeout(async () => {
      this.globals.spinner.show();
      await this.appointmentsService.getAppointments();
      this.globals.spinner.hide();
    }, 1500);
  }

  async onSubmit(appointment: IAppointment) {
    this.globals.spinner.show();
    this.appointmentsService.appointment?._id
      ? await this.appointmentsService.updateAppointment(appointment)
      : await this.appointmentsService.postAppointment(appointment);
    await this.appointmentsService.getAppointments();
    this.globals.spinner.hide();
  }

  async onPageChange(page: any) {
    this.appointmentsService.appointmentsPagination.page = page;
    await this.appointmentsService.getAppointments();
  }

  resetData() {
    this.appointmentsService.appointment = null;
  }
}
