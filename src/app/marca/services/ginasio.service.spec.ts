import { TestBed } from '@angular/core/testing';

import { GinasioService } from './ginasio.service';

describe('GinasioService', () => {
  let service: GinasioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GinasioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
