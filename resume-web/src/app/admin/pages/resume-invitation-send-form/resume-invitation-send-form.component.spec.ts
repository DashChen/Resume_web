import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationSendFormComponent } from './resume-invitation-send-form.component';

describe('ResumeInvitationSendFormComponent', () => {
  let component: ResumeInvitationSendFormComponent;
  let fixture: ComponentFixture<ResumeInvitationSendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationSendFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationSendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
