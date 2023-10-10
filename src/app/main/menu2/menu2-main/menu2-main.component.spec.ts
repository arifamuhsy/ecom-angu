import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2MainComponent } from './menu2-main.component';

describe('Menu2MainComponent', () => {
  let component: Menu2MainComponent;
  let fixture: ComponentFixture<Menu2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu2MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
