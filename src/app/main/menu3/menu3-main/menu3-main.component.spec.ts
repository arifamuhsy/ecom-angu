import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu3MainComponent } from './menu3-main.component';

describe('Menu3MainComponent', () => {
  let component: Menu3MainComponent;
  let fixture: ComponentFixture<Menu3MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu3MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu3MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
