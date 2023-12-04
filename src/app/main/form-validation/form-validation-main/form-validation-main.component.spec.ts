import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationMainComponent } from './form-validation-main.component';

describe('FormValidationMainComponent', () => {
  let component: FormValidationMainComponent;
  let fixture: ComponentFixture<FormValidationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
