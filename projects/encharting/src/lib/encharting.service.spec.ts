import { TestBed } from '@angular/core/testing';

import { EnchartingService } from './encharting.service';

describe('EnchartingService', () => {
  let service: EnchartingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnchartingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
