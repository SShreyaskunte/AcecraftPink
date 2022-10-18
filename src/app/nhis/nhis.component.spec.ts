import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHISComponent } from './nhis.component';

describe('NHISComponent', () => {
  let component: NHISComponent;
  let fixture: ComponentFixture<NHISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
