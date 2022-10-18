import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHTrousersComponent } from './nhtrousers.component';

describe('NHTrousersComponent', () => {
  let component: NHTrousersComponent;
  let fixture: ComponentFixture<NHTrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHTrousersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
