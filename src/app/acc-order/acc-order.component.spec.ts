import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccOrderComponent } from './acc-order.component';

describe('AccOrderComponent', () => {
  let component: AccOrderComponent;
  let fixture: ComponentFixture<AccOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
