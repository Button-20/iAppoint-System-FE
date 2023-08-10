import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  @Output() emitSubmit: EventEmitter<any> = new EventEmitter<any>();
}
