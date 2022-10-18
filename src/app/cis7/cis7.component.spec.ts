import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIS7Component } from './cis7.component';

describe('CIS7Component', () => {
  let component: CIS7Component;
  let fixture: ComponentFixture<CIS7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIS7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIS7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
