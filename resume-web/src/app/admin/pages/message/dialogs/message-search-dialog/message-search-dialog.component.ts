import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormErrorStateMatcher } from '@app/core';
import { MessagePreviewDialogData } from '../../message.component';
import { MessagePreviewDialogComponent } from '../message-preview-dialog/message-preview-dialog.component';

@Component({
  selector: 'app-message-search-dialog',
  templateUrl: './message-search-dialog.component.html',
  styleUrls: ['./message-search-dialog.component.scss']
})
export class MessageSearchDialogComponent implements OnInit {

  isSuccess: boolean = false;
  matcher = new FormErrorStateMatcher();

  messageForm = new FormGroup({
    sendDate: new FormControl(''),
    name: new FormControl(''),
  });

  get sendDateFormCtl() {
    return this.messageForm.get('sendDate') as FormControl;
  }
  get nameFormCtl() {
    return this.messageForm.get('name') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<MessagePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessagePreviewDialogData,
  ) {
  }

  ngOnInit(): void {
  }

  confirm() {
    if (this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.messageForm.value : false);
  }

}
