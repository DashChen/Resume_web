import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationStageDialogComponent } from './resume-invitation-stage-dialog.component';

describe('ResumeInvitationStageDialogComponent', () => {
  let component: ResumeInvitationStageDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationStageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationStageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationStageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
