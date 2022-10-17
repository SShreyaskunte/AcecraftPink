import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccOrdertrackComponent } from './acc-ordertrack.component';

describe('AccOrdertrackComponent', () => {
  let component: AccOrdertrackComponent;
  let fixture: ComponentFixture<AccOrdertrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccOrdertrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccOrdertrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
