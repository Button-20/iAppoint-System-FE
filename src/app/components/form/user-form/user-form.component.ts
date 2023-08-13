import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOrganisation, IUser } from 'src/app/services/core/IApp';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Output() emitSubmit: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('closeBtn') closeBtn: any;

  @Input() user: IUser | null = null;

  @Input() organisations: IOrganisation[] = [];

  userForm: FormGroup = new FormGroup({
    fullname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$'
        ),
      ])
    ),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ])
    ),
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    ),
    phone_alt: new FormControl('', Validators.minLength(10)),
    organisation: new FormControl('', Validators.required),
  });

  selectedOrganisation: IOrganisation | null = null;

  ngOnChanges() {
    if (this.user) {
      this.userForm.patchValue({
        ...this.user,
      });
      this.userForm.controls['password'].disable();
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.emitSubmit.emit(this.userForm.value);
      this.userForm.reset();
      this.closeBtn.nativeElement?.click();
    }
  }

  selectDropdown(event: any) {
    // close other dropdown options
    event.preventDefault();
    let mainElement = event.target;
    const element = document.querySelectorAll('.dropdown-options');
    element.forEach((el) => {
      if (
        el.classList.contains('show') &&
        el !== mainElement.nextElementSibling
      ) {
        el.classList.remove('show');
      }
    });

    if (mainElement.nodeName !== 'BUTTON') mainElement = mainElement.parentNode;

    // add show class to dropdown options
    for (let i = 0; i < mainElement.children.length; i++) {
      if (mainElement.children[i].classList.contains('dropdown-options')) {
        mainElement.children[i].classList.toggle('show');
      }
    }
    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target?.classList.contains('dropdown-option')) {
        element.forEach((el) => {
          if (el.classList.contains('show')) {
            el.classList.remove('show');
          }
        });
      }
    });
  }

  get fullname() {
    return this.userForm.get('fullname') as FormControl;
  }

  get password() {
    return this.userForm.get('password') as FormControl;
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  get phone() {
    return this.userForm.get('phone') as FormControl;
  }

  get phone_alt() {
    return this.userForm.get('phone_alt') as FormControl;
  }

  get organisation() {
    return this.userForm.get('organisation') as FormControl;
  }
}
