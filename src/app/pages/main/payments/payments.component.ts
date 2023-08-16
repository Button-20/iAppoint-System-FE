import { Component } from '@angular/core';
import { PaymentsService } from 'src/app/services/api/payments/payments.service';
import { SubscriptionsService } from 'src/app/services/api/subscriptions/subscriptions.service';
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
    public subscriptionsService: SubscriptionsService,
    public globals: GlobalsService
  ) {}

  async ngOnInit() {
    switch (this.globals.user.role) {
      case 'super_admin':
        await this.paymentsService.getPayments();
        await this.subscriptionsService.getSubscriptions();
        break;
      case 'user':
        await this.paymentsService.getPaymentsByOrganisation();
        await this.subscriptionsService.getSubscriptions();
        break;
      default:
        break;
    }
  }

  async onSubmit(event: any) {
    await this.paymentsService.createPayment(event);
  }
}
