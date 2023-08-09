import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppointment, ICustomer } from 'src/app/services/core/IApp';

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  @Output() emitSubmit: EventEmitter<IAppointment> =
    new EventEmitter<IAppointment>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() appointment: IAppointment | null = null;
  @Input() customers: ICustomer[] = [];

  @ViewChild('closeBtn') closeBtn: any;

  appointmentForm: FormGroup = new FormGroup({
    customer: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    description: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    appointment_date: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
  });

  selectedCustomer: ICustomer | undefined;

  ngOnChanges() {
    if (this.appointment) {
      this.selectedCustomer = this.customers.find(
        (customer) => customer._id === this.appointment?.customer?._id
      );
      this.appointmentForm.patchValue({
        ...this.appointment,
        customer: this.selectedCustomer,
        appointment_date: this.appointment?.appointment_date?.slice(0, 16),
      });
    }
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.emitSubmit.emit(this.appointmentForm.value);
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

  get customer() {
    return this.appointmentForm.get('customer') as FormControl;
  }

  get description() {
    return this.appointmentForm.get('description') as FormControl;
  }

  get appointment_date() {
    return this.appointmentForm.get('appointment_date') as FormControl;
  }
}
