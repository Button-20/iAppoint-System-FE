import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/api/customers/customers.service';
import { TicketsService } from 'src/app/services/api/tickets/tickets.service';
import { ITicket } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
  modalId: string = 'ticketFormModal';
  modalId2: string = 'ticketModal';

  constructor(
    public ticketsService: TicketsService,
    public customersService: CustomersService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    await this.initializeTicket();
  }

  ngOnDestroy() {
    this.ticketsService.tickets = [];
    this.ticketsService.ticketsPagination = {
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
    // if (confirm('Are you sure you want to delete this ticket?')) {
    //   this.globals.spinner.show();
    //   await this.ticketsService.deleteTicket(id);
    //   this.globals.spinner.hide();
    //   await this.ticketsService.getTickets();
    // }
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
      await this.initializeTicket();
      this.globals.spinner.hide();
    }, 1500);
  }

  async onSubmit(ticket: ITicket) {
    this.globals.spinner.show();
    ticket?._id
      ? await this.ticketsService.updateTicket(ticket)
      : await this.ticketsService.createTicket(ticket);
    await this.initializeTicket();
    this.globals.spinner.hide();
  }

  async onPageChange(page: any) {
    this.ticketsService.ticketsPagination.page = page;
    await this.initializeTicket();
  }
  async itemsPerPageChanged(event: any) {
    this.ticketsService.ticketsPagination.itemsPerPage = event;
    await this.initializeTicket();
  }

  async initializeTicket() {
    switch (this.globals.user.role) {
      case 'super_admin':
        await this.ticketsService.getTickets();
        await this.customersService.getCustomers();
        break;
      case 'user':
        await this.ticketsService.getTicketsByOrganisation();
        await this.customersService.getCustomersByOrganisation();
        break;
      default:
        break;
    }
  }

  resetData() {
    this.ticketsService.ticket = null;
  }
}
