import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationAddDialogComponent } from './resume-invitation-add-dialog.component';

describe('ResumeInvitationAddDialogComponent', () => {
  let component: ResumeInvitationAddDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
