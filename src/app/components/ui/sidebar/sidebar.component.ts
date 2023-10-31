import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() emitSidebarToggle: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  navigations = [
    {
      name: 'Home',
      icon: 'bi-house-fill',
      link: '/main/home',
    },
    {
      name: 'Customers',
      icon: 'bi-person-fill',
      link: '/main/customers',
    },
    {
      name: 'Appointments',
      icon: 'bi-book-half',
      link: '/main/appointments',
    },
    {
      name: 'Users',
      icon: 'bi-people-fill',
      link: '/main/users',
    },
    {
      name: 'Staff',
      icon: 'bi-people-fill',
      link: '/main/staff',
    },
    {
      name: 'Bulk SMS',
      icon: 'bi-chat-left-fill',
      link: '/main/bulk-sms',
    },
    {
      name: 'Payments',
      icon: 'bi-cash-stack',
      link: '/main/payments',
    },
    {
      name: 'Tickets',
      icon: 'bi-file-earmark-text-fill',
      link: '/main/tickets',
    },
    {
      name: 'Organisations',
      icon: 'bi-building',
      link: '/main/organisations',
    },
  ];

  constructor(private globals: GlobalsService) {
    if (globals.user.role == 'user')
      this.navigations = this.navigations.filter(
        (nav) => nav.name != 'Staff' && nav.name != 'Organisations'
      );
  }

  logout() {
    this.globals.logOutUser();
  }
}
