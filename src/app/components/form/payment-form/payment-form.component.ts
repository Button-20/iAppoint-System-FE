import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomer, ISubscription } from 'src/app/services/core/IApp';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  @Output() emitSubmit: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() subscriptions: Array<ISubscription> = [];

  @ViewChild('closeBtn') closeBtn: any;

  paymentForm: FormGroup = new FormGroup({
    amount: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.min(1)])
    ),
    subscription: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    mobile_number: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    ),
    mobile_network: new FormControl('MTN', Validators.required),
  });

  selectedSubscription: ISubscription | any;

  onSubmit() {
    if (this.paymentForm.valid) {
      this.emitSubmit.emit(this.paymentForm.value);
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

  get amount() {
    return this.paymentForm.get('amount') as FormControl;
  }

  get subscription() {
    return this.paymentForm.get('subscription') as FormControl;
  }

  get mobile_number() {
    return this.paymentForm.get('mobile_number') as FormControl;
  }

  get mobile_network() {
    return this.paymentForm.get('mobile_network') as FormControl;
  }
}
