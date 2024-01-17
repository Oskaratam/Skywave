import { TestBed } from '@angular/core/testing';

import { CurrentNumberService } from './current-number.service';

describe('CurrentNumberService', () => {
  let service: CurrentNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
