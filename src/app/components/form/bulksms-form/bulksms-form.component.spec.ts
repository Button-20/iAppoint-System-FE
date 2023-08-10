import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulksmsFormComponent } from './bulksms-form.component';

describe('BulksmsFormComponent', () => {
  let component: BulksmsFormComponent;
  let fixture: ComponentFixture<BulksmsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulksmsFormComponent]
    });
    fixture = TestBed.createComponent(BulksmsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
