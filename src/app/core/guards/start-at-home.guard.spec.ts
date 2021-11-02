import { TestBed } from '@angular/core/testing';

import { StartAtHomeGuard } from './start-at-home.guard';

describe('StartAtHomeGuard', () => {
  let guard: StartAtHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StartAtHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
