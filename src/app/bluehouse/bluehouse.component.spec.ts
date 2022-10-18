import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluehouseComponent } from './bluehouse.component';

describe('BluehouseComponent', () => {
  let component: BluehouseComponent;
  let fixture: ComponentFixture<BluehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
