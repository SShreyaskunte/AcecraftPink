import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowtohighComponent } from './lowtohigh.component';

describe('LowtohighComponent', () => {
  let component: LowtohighComponent;
  let fixture: ComponentFixture<LowtohighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowtohighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowtohighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
