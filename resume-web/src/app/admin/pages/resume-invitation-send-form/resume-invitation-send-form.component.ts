import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  showSend$!: Subscription;

  levelOptions: ISelectOption[] = [];

  date1 = new FormControl('');
  date2 = new FormControl('');
  date3 = new FormControl('');
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private resumeInvitationService: ResumeInvitationService
  ) {
    super();
  }

  // @ViewChild('autosize') autosize!: CdkTextareaAutosize;

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
