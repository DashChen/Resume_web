import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationImportDialogComponent } from './resume-invitation-import-dialog.component';

describe('ResumeInvitationImportDialogComponent', () => {
  let component: ResumeInvitationImportDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationImportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationImportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
