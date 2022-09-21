import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ResumeData } from '@app/core/datas';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeInvitationSendAddDialogComponent } from '@app/admin/pages/resume-invitation-send-add-dialog/resume-invitation-send-add-dialog.component';
import { ResumeInvitationService } from '../';

export interface ReceiverDialogData extends basicDialog {
  item: ResumeData | null;
}

@Component({
  selector: 'admin-resume-invitation-send-form',
  templateUrl: './resume-invitation-send-form.component.html',
  styleUrls: ['./resume-invitation-send-form.component.scss']
})
export class ResumeInvitationSendFormComponent extends BaseComponent implements OnInit, OnDestroy {

  override dialogConfig: ReceiverDialogData = {} as ReceiverDialogData;

  showSend!: boolean;
  showSend$!: Subscription;

  levelOptions: ISelectOption[] = [];

  editForm = new FormGroup({
    date1: new FormControl(''),
    date2: new FormControl(''),
    date3: new FormControl(''),
  });

  constructor(
    public dialog: MatDialog,
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
    this.dialogConfig.title = '新增人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = null;
    const dialogRef = this.dialog.open(ResumeInvitationSendAddDialogComponent, {
      width: '614px',
      maxWidth: '100%',
      data: this.dialogConfig
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 新增人員
      }
    });
  }

  cancelSend() {
    //
  }

  sendMessage() {
    //
  }

}
