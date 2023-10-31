import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOrganisation } from 'src/app/services/core/IApp';

@Component({
  selector: 'organisation-form',
  templateUrl: './organisation-form.component.html',
  styleUrls: ['./organisation-form.component.scss'],
})
export class OrganisationFormComponent {
  @Output() emitSubmit: EventEmitter<IOrganisation> =
    new EventEmitter<IOrganisation>();

  @Output() dismissModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('closeBtn') closeBtn: any;

  @Input() organisation: IOrganisation | null = null;

  organisationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  selectedOrganisation: IOrganisation | null = null;

  ngOnChanges() {
    if (this.organisation) {
      this.organisationForm.patchValue({
        ...this.organisation,
      });
      this.organisationForm.controls['password'].disable();
    }
  }

  onSubmit() {
    if (this.organisationForm.valid) {
      this.emitSubmit.emit(this.organisationForm.value);
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

  get name() {
    return this.organisationForm.get('name') as FormControl;
  }
}
