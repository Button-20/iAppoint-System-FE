import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ChartComponent,
} from 'ng-apexcharts';
import { AppointmentsService } from 'src/app/services/api/appointments/appointments.service';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { UsersService } from 'src/app/services/api/users/users.service';
import { GlobalsService } from 'src/app/services/core/globals';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('chart') chart: ChartComponent | undefined;
  @ViewChild('columnChart') columnChart: ChartComponent | undefined;

  constructor(
    public customersService: CustomersService,
    public usersService: UsersService,
    public appointmentsService: AppointmentsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    switch (this.globals.user.role) {
      case 'super_admin':
        this.globals.spinner.show();
        await this.customersService.getGenderChart();
        await this.customersService.getCustomerTotal();
        await this.usersService.getUsersTotal();
        await this.appointmentsService.getAppointmentsTotal();
        this.globals.spinner.hide();
        break;
      case 'user':
        this.globals.spinner.show();
        await this.customersService.getGenderChartByOrganisation();
        await this.customersService.getCustomerTotalByOrganisation();
        await this.usersService.getUsersTotalByOrganisation();
        await this.appointmentsService.getAppointmentsTotalByOrganisation();
        this.globals.spinner.hide();
        break;
      default:
        break;
    }
  }
}
