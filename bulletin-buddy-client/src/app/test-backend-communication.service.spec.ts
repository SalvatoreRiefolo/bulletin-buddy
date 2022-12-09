import { TestBed } from '@angular/core/testing';

import { TestBackendCommunicationService } from './test-backend-communication.service';

describe('TestBackendCommunicationService', () => {
  let service: TestBackendCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBackendCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
