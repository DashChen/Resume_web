import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationBasicDialogComponent } from './resume-invitation-basic-dialog.component';

describe('ResumeInvitationBasicDialogComponent', () => {
  let component: ResumeInvitationBasicDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationBasicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationBasicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationBasicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
