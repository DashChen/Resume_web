import { TestBed } from '@angular/core/testing';

import { ResumeInvitationService } from './resume-invitation.service';

describe('ResumeInvitationService', () => {
  let service: ResumeInvitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeInvitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
