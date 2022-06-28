import { TestBed } from '@angular/core/testing';

import { NavAuthGuard } from './nav-auth.guard';

describe('NavAuthGuard', () => {
  let guard: NavAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
