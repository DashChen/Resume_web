import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationProfileDialogComponent } from './resume-invitation-profile-dialog.component';

describe('ResumeInvitationProfileDialogComponent', () => {
  let component: ResumeInvitationProfileDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationProfileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
