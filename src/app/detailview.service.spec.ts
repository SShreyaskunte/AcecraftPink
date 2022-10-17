import { TestBed } from '@angular/core/testing';

import { DetailviewService } from './detailview.service';

describe('DetailviewService', () => {
  let service: DetailviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
