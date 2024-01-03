import { TestBed } from '@angular/core/testing';

import { StandsDetailsService } from './stands-details.service';

describe('StandsDetailsService', () => {
  let service: StandsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
