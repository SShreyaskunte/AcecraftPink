import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightolowComponent } from './hightolow.component';

describe('HightolowComponent', () => {
  let component: HightolowComponent;
  let fixture: ComponentFixture<HightolowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightolowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightolowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
