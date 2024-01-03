import { TestBed } from '@angular/core/testing';

import { BonsaiDetailsService } from './bonsai-details.service';

describe('BonsaiDetailsService', () => {
  let service: BonsaiDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonsaiDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
