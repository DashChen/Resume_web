import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeInvitationService } from '../';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'admin-resume-invitation-send-form',
  templateUrl: './resume-invitation-send-form.component.html',
  styleUrls: ['./resume-invitation-send-form.component.scss']
})
export class ResumeInvitationSendFormComponent extends BaseComponent implements OnInit, OnDestroy {

  showSend!: boolean;
  showSend$!: Subscription;

  levelOptions: ISelectOption[] = [];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private resumeInvitationService: ResumeInvitationService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.showSend$ = this.resumeInvitationService.showSend$.subscribe(value => {
      this.showSend = value;
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.showSend$.unsubscribe();
  }

  showSendMsg(show: boolean) {
    this.resumeInvitationService.updateShowSend(show);
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
