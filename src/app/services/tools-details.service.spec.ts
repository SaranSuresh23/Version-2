import { TestBed } from '@angular/core/testing';

import { ToolsDetailsService } from './tools-details.service';

describe('ToolsDetailsService', () => {
  let service: ToolsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
