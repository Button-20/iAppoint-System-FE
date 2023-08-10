import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bulksms-form',
  templateUrl: './bulksms-form.component.html',
  styleUrls: ['./bulksms-form.component.scss'],
})
export class BulksmsFormComponent {
  @Input() receipients: string[] = [];

  @Output() emitSubmit: EventEmitter<any> = new EventEmitter<any>();

  bulkSmsForm: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
    receipients: new FormControl([], Validators.required),
  });

  ngOnChanges() {
    this.bulkSmsForm.patchValue({ receipients: this.receipients });
  }

  onSubmit() {
    if (this.bulkSmsForm.invalid) return;
    this.emitSubmit.emit(this.bulkSmsForm.value);
  }

  get message() {
    return this.bulkSmsForm.get('message') as FormControl;
  }
}
