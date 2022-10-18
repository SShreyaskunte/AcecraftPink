import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CISRoyalComponent } from './cisroyal.component';

describe('CISRoyalComponent', () => {
  let component: CISRoyalComponent;
  let fixture: ComponentFixture<CISRoyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CISRoyalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CISRoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
