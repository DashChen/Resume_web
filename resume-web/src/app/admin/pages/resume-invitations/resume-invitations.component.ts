import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResumeInvitationService } from '../';

@Component({
  selector: 'admin-resume-invitations',
  templateUrl: './resume-invitations.component.html',
  styleUrls: ['./resume-invitations.component.scss']
})
export class ResumeInvitationsComponent implements OnInit, OnDestroy {

  showSend!: boolean;

  showSend$!: Subscription;

  constructor(
    private resumeInvitationService: ResumeInvitationService,
  ) { }

  ngOnInit(): void {
    this.resumeInvitationService.updateShowSend(false);
    this.showSend$ = this.resumeInvitationService.showSend$.subscribe(value => {
      this.showSend = value;
    });
  }

  ngOnDestroy(): void {
    this.showSend$.unsubscribe();
  }

}
