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

  showSendSubscription!: Subscription;

  constructor(
    private resumeInvitationService: ResumeInvitationService,
  ) { }

  ngOnInit(): void {
    this.resumeInvitationService.setShowSend(false);
    this.showSendSubscription = this.resumeInvitationService.getShowSend().subscribe(value => {
      this.showSend = value;
    });
  }

  ngOnDestroy(): void {
    this.showSendSubscription.unsubscribe();
  }

}
