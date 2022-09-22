import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvitationListComponent } from './resume-invitation-list.component';

describe('ResumeInvitationListComponent', () => {
  let component: ResumeInvitationListComponent;
  let fixture: ComponentFixture<ResumeInvitationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvitationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
