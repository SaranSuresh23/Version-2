import { TestBed } from '@angular/core/testing';

import { PotsDetailsService } from './pots-details.service';

describe('PotsDetailsService', () => {
  let service: PotsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
