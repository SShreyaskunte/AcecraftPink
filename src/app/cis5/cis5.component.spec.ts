import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIS5Component } from './cis5.component';

describe('CIS5Component', () => {
  let component: CIS5Component;
  let fixture: ComponentFixture<CIS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIS5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
