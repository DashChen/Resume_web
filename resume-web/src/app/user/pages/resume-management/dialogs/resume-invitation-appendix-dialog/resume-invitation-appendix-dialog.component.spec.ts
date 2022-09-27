import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationAppendixDialogComponent } from './resume-invitation-appendix-dialog.component';

describe('ResumeInvitationAppendixDialogComponent', () => {
  let component: ResumeInvitationAppendixDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationAppendixDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationAppendixDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationAppendixDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
