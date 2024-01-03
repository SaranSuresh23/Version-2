import { TestBed } from '@angular/core/testing';

import { FertilizersDetailsService } from './fertilizers-details.service';

describe('FertilizersDetailsService', () => {
  let service: FertilizersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
