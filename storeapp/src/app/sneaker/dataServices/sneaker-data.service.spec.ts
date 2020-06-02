import { TestBed } from '@angular/core/testing';

import { SneakerDataService } from './sneaker-data.service';

describe('SneakerDataService', () => {
  let service: SneakerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
