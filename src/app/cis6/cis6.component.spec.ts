import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIS6Component } from './cis6.component';

describe('CIS6Component', () => {
  let component: CIS6Component;
  let fixture: ComponentFixture<CIS6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIS6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIS6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
