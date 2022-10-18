import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CISShortsComponent } from './cisshorts.component';

describe('CISShortsComponent', () => {
  let component: CISShortsComponent;
  let fixture: ComponentFixture<CISShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CISShortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CISShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
