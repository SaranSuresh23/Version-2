import { TestBed } from '@angular/core/testing';

import { SeedsDetailsService } from './seeds-details.service';

describe('SeedsDetailsService', () => {
  let service: SeedsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
