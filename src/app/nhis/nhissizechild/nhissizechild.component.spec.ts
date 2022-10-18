import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhissizechildComponent } from './nhissizechild.component';

describe('NhissizechildComponent', () => {
  let component: NhissizechildComponent;
  let fixture: ComponentFixture<NhissizechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhissizechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhissizechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
