/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartOrderService } from './cart-order.service';

describe('Service: CartOrder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartOrderService]
    });
  });

  it('should ...', inject([CartOrderService], (service: CartOrderService) => {
    expect(service).toBeTruthy();
  }));
});
