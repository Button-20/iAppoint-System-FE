import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from 'src/app/services/core/IApp';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  @Output() emitSubmit: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('closeBtn') closeBtn: any;

  @Input() customer: ICustomer | null = null;

  customerForm: FormGroup = new FormGroup({
    firstname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    lastname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
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
    gender: new FormControl('male', Validators.required),
    dob: new FormControl('', Validators.required),
    phone_alt: new FormControl('', Validators.minLength(10)),
  });

  ngOnChanges() {
    if (this.customer) {
      this.customerForm.patchValue({
        ...this.customer,
        dob: this.customer?.dob?.split('T')[0],
      });
    }
  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.emitSubmit.emit(this.customerForm.value);
      this.closeBtn.nativeElement?.click();
    }
  }

  get firstname() {
    return this.customerForm.get('firstname') as FormControl;
  }

  get lastname() {
    return this.customerForm.get('lastname') as FormControl;
  }

  get email() {
    return this.customerForm.get('email') as FormControl;
  }

  get phone() {
    return this.customerForm.get('phone') as FormControl;
  }

  get dob() {
    return this.customerForm.get('dob') as FormControl;
  }

  get phone_alt() {
    return this.customerForm.get('phone_alt') as FormControl;
  }
}
