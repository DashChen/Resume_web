import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationLicenseDialogComponent } from './resume-invitation-license-dialog.component';

describe('ResumeInvitationLicenseDialogComponent', () => {
  let component: ResumeInvitationLicenseDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationLicenseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationLicenseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationLicenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
