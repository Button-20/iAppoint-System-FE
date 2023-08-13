import { Component } from '@angular/core';
import { OrganisationsService } from 'src/app/services/api/organisations/organisations.service';
import { UsersService } from 'src/app/services/api/users/users.service';
import { IUser } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  modalId: string = 'userFormModal';

  constructor(
    public usersService: UsersService,
    public organisationsService: OrganisationsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    await this.initializeUser();
  }

  ngOnDestroy() {
    this.usersService.users = [];
    this.usersService.usersPagination = {
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

  async onDelete(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      await this.usersService.deleteUser(userId);
      await this.initializeUser();
    }
  }

  async onSubmit(user: IUser) {
    this.globals.spinner.show();
    this.usersService.user?._id
      ? await this.usersService.updateUser(user)
      : await this.usersService.postUser(user);
    await this.initializeUser();
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

  async onPageChange(page: any) {
    this.usersService.usersPagination.page = page;
    await this.initializeUser();
  }

  async itemsPerPageChanged(event: any) {
    this.usersService.usersPagination.itemsPerPage = event;
    await this.initializeUser();
  }

  async search(event: any) {
    this.usersService.usersPagination.search = event.target.value;
    setTimeout(async () => {
      this.globals.spinner.show();
      await this.initializeUser();
      this.globals.spinner.hide();
    }, 1500);
  }

  async initializeUser() {
    await this.usersService.getUsers();
    await this.organisationsService.getOrganisations();
  }

  resetData() {
    this.usersService.user = null;
  }
}
