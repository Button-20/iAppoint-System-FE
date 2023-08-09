import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/api/users/users.service';
import { IUser } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  modalId: string = 'staffFormModal';

  constructor(
    public usersService: UsersService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    await this.usersService.getStaff();
  }

  ngAfterViewInit() {
    this.startListener();
  }

  async onDelete(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.globals.spinner.show();
      const resp: any = await this.usersService.deleteUser(userId);
      this.globals.spinner.hide();
      this.globals.toast.success(resp.message);
      await this.usersService.getStaff();
    }
  }

  async onSubmit(user: IUser) {
    this.globals.spinner.show();
    this.usersService.user?._id
      ? await this.usersService.updateUser(user)
      : await this.usersService.postStaff(user);
    await this.usersService.getStaff();
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
    this.usersService.staffPagination.page = page;
    await this.usersService.getStaff();
  }

  resetData() {
    this.usersService.staff = null;
  }
}
