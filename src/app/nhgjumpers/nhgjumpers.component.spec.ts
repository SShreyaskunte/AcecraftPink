import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHGJumpersComponent } from './nhgjumpers.component';

describe('NHGJumpersComponent', () => {
  let component: NHGJumpersComponent;
  let fixture: ComponentFixture<NHGJumpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHGJumpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHGJumpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
