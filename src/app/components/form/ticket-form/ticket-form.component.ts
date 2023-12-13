import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomer, IOrganisation, ITicket } from 'src/app/services/core/IApp';

@Component({
  selector: 'ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent {
  @Output() emitSubmit: EventEmitter<ITicket> = new EventEmitter<ITicket>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('closeBtn') closeBtn: any;

  @Input() ticket: ITicket | null = null;

  @Input() customers: ICustomer[] = [];

  @Input() organisations: IOrganisation[] = [];

  ticketForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    title: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    description: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    customer: new FormControl('', Validators.required),
    status: new FormControl('pending'),
  });

  statusOptions: string[] = ['pending', 'resolved'];

  selectedCustomer: ICustomer | undefined;

  ngOnChanges() {
    if (this.ticket) {
      this.selectedCustomer = this.customers.find(
        (customer) => customer._id === this.ticket?.customer?._id
      );
      this.ticketForm.patchValue({
        ...this.ticket,
        customer: this.selectedCustomer,
      });
    }
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.emitSubmit.emit(this.ticketForm.value);
      this.ticketForm.reset();
      this.selectedCustomer = undefined;
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

  get title() {
    return this.ticketForm.get('title') as FormControl;
  }

  get description() {
    return this.ticketForm.get('description') as FormControl;
  }

  get customer() {
    return this.ticketForm.get('customer') as FormControl;
  }
}
