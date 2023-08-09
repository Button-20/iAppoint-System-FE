import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IUser } from './IApp';
import { StorageService } from './storage';
import { ToasterService } from './toaster';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  user: IUser | any;

  constructor(
    public storage: StorageService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toast: ToasterService,
    public spinner: NgxSpinnerService
  ) {
    this.user = (this.storage.getUserDetails() as IUser) || undefined;
  }

  logOutUser() {
    this.spinner.show();
    setTimeout(() => {
      this.storage.logOutUser();
      this.user = undefined;
      this.spinner.hide();
    }, 1000);
  }
}
