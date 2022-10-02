import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationTitleDialogComponent } from './resume-invitation-title-dialog.component';

describe('ResumeInvitationTitleDialogComponent', () => {
  let component: ResumeInvitationTitleDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationTitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationTitleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
