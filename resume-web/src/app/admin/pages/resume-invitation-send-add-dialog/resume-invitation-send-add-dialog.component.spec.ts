import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationSendAddDialogComponent } from './resume-invitation-send-add-dialog.component';

describe('ResumeInvitationSendAddDialogComponent', () => {
  let component: ResumeInvitationSendAddDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationSendAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationSendAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationSendAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
