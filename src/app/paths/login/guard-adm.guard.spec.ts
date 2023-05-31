import { TestBed } from '@angular/core/testing';

import { GuardAdmGuard } from './guard-adm.guard';

describe('GuardAdmGuard', () => {
  let guard: GuardAdmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAdmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
