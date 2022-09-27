import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationWorkDialogComponent } from './resume-invitation-work-dialog.component';

describe('ResumeInvitationWorkDialogComponent', () => {
  let component: ResumeInvitationWorkDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationWorkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationWorkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationWorkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
