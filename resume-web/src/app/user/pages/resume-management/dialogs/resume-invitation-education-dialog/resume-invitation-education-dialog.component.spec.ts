import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationEducationDialogComponent } from './resume-invitation-education-dialog.component';

describe('ResumeInvitationEducationDialogComponent', () => {
  let component: ResumeInvitationEducationDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationEducationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationEducationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationEducationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
