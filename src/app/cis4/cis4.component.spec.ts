import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIS4Component } from './cis4.component';

describe('CIS4Component', () => {
  let component: CIS4Component;
  let fixture: ComponentFixture<CIS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIS4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
