import { TestBed } from '@angular/core/testing';

import { TopOffersService } from './top-offers.service';

describe('TopOffersService', () => {
  let service: TopOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
