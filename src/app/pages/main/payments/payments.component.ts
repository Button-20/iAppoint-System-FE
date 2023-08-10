import { Component } from '@angular/core';
import { PaymentsService } from 'src/app/services/api/payments/payments.service';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent {
  modalId: string = 'paymentsFormModal';

  constructor(
    public paymentsService: PaymentsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    switch (this.globals.user.role) {
      case 'super_admin':
        await this.paymentsService.getPayments();
        break;
      case 'user':
        await this.paymentsService.getPaymentsByOrganisation();
        break;
      default:
        break;
    }
  }

  async onSubmit(event: any) {
    await this.paymentsService.createPayment(event);
  }
}
