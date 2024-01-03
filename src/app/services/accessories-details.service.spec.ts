import { TestBed } from '@angular/core/testing';

import { AccessoriesDetailsService } from './accessories-details.service';

describe('AccessoriesDetailsService', () => {
  let service: AccessoriesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoriesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
