import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMainComponent } from './intro-main.component';

describe('IntroMainComponent', () => {
  let component: IntroMainComponent;
  let fixture: ComponentFixture<IntroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
