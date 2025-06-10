import { TestBed } from '@angular/core/testing';

import { GetapiCallService } from './getapi-call.service';

describe('GetapiCallService', () => {
  let service: GetapiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetapiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
