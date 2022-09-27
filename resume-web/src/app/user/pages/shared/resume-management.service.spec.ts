import { TestBed } from '@angular/core/testing';

import { ResumeManagementService } from './resume-management.service';

describe('ResumeManagementService', () => {
  let service: ResumeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
