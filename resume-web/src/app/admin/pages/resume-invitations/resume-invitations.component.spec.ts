import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationsComponent } from './resume-invitations.component';

describe('ResumeInvitationsComponent', () => {
  let component: ResumeInvitationsComponent;
  let fixture: ComponentFixture<ResumeInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
