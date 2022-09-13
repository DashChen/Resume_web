import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeInvitationService } from '../';

@Component({
  selector: 'admin-resume-invitation-send-form',
  templateUrl: './resume-invitation-send-form.component.html',
  styleUrls: ['./resume-invitation-send-form.component.scss']
})
export class ResumeInvitationSendFormComponent extends BaseComponent implements OnInit, OnDestroy {

  showSend!: boolean;
  showSendSubscription!: Subscription;

  levelOptions: ISelectOption[] = [];

  constructor(
    private resumeInvitationService: ResumeInvitationService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.showSendSubscription = this.resumeInvitationService.getShowSend().subscribe(value => {
      this.showSend = value;
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.showSendSubscription.unsubscribe();
  }

  showSendMsg(show: boolean) {
    console.log('showSendMsg', show);
    this.resumeInvitationService.setShowSend(show);
  }

  addReceiver() {
    //
  }
  
  cancelSend() {
    //
  }

  sendMessage() {
    //
  }

}
