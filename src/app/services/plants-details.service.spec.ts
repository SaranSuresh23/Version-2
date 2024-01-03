import { TestBed } from '@angular/core/testing';

import { PlantsDetailsService } from './plants-details.service';

describe('PlantsDetailsService', () => {
  let service: PlantsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
