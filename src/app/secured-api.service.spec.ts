import { TestBed } from '@angular/core/testing';

import { SecuredApiService } from './secured-api.service';

describe('SecuredApiService', () => {
  let service: SecuredApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuredApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
