import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1MainComponent } from './menu1-main.component';

describe('Menu1MainComponent', () => {
  let component: Menu1MainComponent;
  let fixture: ComponentFixture<Menu1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu1MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
