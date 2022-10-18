import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHGShirt3Component } from './nhgshirt3.component';

describe('NHGShirt3Component', () => {
  let component: NHGShirt3Component;
  let fixture: ComponentFixture<NHGShirt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHGShirt3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHGShirt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
