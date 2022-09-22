import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationDeleteDialogComponent } from './resume-invitation-delete-dialog.component';

describe('ResumeInvitationDeleteDialogComponent', () => {
  let component: ResumeInvitationDeleteDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
