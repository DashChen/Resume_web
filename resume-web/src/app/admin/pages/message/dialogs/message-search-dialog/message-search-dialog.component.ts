import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ResumeShareCodesShareCodeDto } from '@app/core/models/Api';
import { MessagePreviewDialogData, MessageSearchDialogData } from '../../message.component';
import { MessagePreviewDialogComponent } from '../message-preview-dialog/message-preview-dialog.component';

@Component({
  selector: 'app-message-search-dialog',
  templateUrl: './message-search-dialog.component.html',
  styleUrls: ['./message-search-dialog.component.scss']
})
export class MessageSearchDialogComponent implements OnInit {

  sendStatusOptions: ISelectOption[] = [
    { text: '是', key: true },
    { text: '否', key: false },
  ];
  openStatusOptions: ISelectOption[] = [
    { text: '是', key: true },
    { text: '否', key: false },
  ];
  stageOptions: ISelectOption[] = [];
  stageList: ResumeShareCodesShareCodeDto[] = [];

  type: string;
  tabSelected: number;
  matcher = new FormErrorStateMatcher();

  messageForm = new FormGroup({
    sendDate: new FormControl(''),
    sendStatus: new FormControl(''),
    openStatus: new FormControl(''),
    stage: new FormControl(''),
    name: new FormControl('', [Validators.pattern('[\\W]+')]),
  });

  get sendDateFormCtl() {
    return this.messageForm.get('sendDate') as FormControl;
  }
  get nameFormCtl() {
    return this.messageForm.get('name') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<MessagePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageSearchDialogData,
  ) {
    this.type = data.type;
    this.tabSelected = data.tabSelected;
  }

  ngOnInit(): void {
  }

  closeDialog(isSuccess: boolean) {
    if (isSuccess && this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }

    this.dialogRef.close(isSuccess ? this.messageForm.value : false);
  }

}
