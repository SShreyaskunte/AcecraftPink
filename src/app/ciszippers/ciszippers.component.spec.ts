import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CISZippersComponent } from './ciszippers.component';

describe('CISZippersComponent', () => {
  let component: CISZippersComponent;
  let fixture: ComponentFixture<CISZippersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CISZippersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CISZippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
