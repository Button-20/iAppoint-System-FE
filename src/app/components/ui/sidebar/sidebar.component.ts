import { Component } from '@angular/core';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
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
  ];

  constructor(private globals: GlobalsService) {}

  logout() {
    this.globals.logOutUser();
  }
}
