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
  selector: 'staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss'],
})
export class StaffFormComponent {
  @Output() emitSubmit: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('closeBtn') closeBtn: any;

  @Input() staff: IUser | null = null;

  staffForm: FormGroup = new FormGroup({
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
  });

  selectedOrganisation: IOrganisation | null = null;

  ngOnChanges() {
    if (this.staff) {
      this.staffForm.patchValue({
        ...this.staff,
      });
      this.staffForm.controls['password'].disable();
    }
  }

  onSubmit() {
    if (this.staffForm.valid) {
      this.emitSubmit.emit(this.staffForm.value);
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
    return this.staffForm.get('fullname') as FormControl;
  }

  get password() {
    return this.staffForm.get('password') as FormControl;
  }

  get email() {
    return this.staffForm.get('email') as FormControl;
  }

  get phone() {
    return this.staffForm.get('phone') as FormControl;
  }

  get phone_alt() {
    return this.staffForm.get('phone_alt') as FormControl;
  }
}
