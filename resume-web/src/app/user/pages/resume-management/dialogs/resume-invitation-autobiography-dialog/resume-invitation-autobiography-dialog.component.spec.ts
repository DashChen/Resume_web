import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationAutobiographyDialogComponent } from './resume-invitation-autobiography-dialog.component';

describe('ResumeInvitationAutobiographyDialogComponent', () => {
  let component: ResumeInvitationAutobiographyDialogComponent;
  let fixture: ComponentFixture<ResumeInvitationAutobiographyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationAutobiographyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationAutobiographyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
