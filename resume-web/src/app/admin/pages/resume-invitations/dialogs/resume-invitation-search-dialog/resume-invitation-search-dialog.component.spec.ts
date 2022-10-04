import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationSearchDialogComponent } from './resume-invitation-search-dialog.component';

describe('ResumeInvitationSearchDialogComponent', () => {
  let component: ResumeInvitationSearchDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationSearchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
