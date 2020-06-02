import { TestBed } from '@angular/core/testing';

import { BrandDataService } from './brand-data.service';

describe('BrandDataService', () => {
  let service: BrandDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
