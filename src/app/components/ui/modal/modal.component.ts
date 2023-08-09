import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalId: string = '';
  @Input() modalClass: string = '';
  @Input() size: string = '';
  @Input() centered: boolean = false;
  @Input() right: boolean = false;
  @Input() scrollable: boolean = false;
  @Input() backdrop: string = 'true';
  @Input() keyboard: boolean = true;
}
