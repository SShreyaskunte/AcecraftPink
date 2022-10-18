import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIS10Component } from './cis10.component';

describe('CIS10Component', () => {
  let component: CIS10Component;
  let fixture: ComponentFixture<CIS10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIS10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIS10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
