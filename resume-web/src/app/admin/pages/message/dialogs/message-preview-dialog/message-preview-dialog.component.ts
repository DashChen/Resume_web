import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormErrorStateMatcher } from '@app/core';
import { MessagePreviewDialogData } from '../../message.component';

@Component({
  selector: 'admin-message-preview-dialog',
  templateUrl: './message-preview-dialog.component.html',
  styleUrls: ['./message-preview-dialog.component.scss']
})
export class MessagePreviewDialogComponent implements OnInit {

  isSuccess: boolean = false;
  matcher = new FormErrorStateMatcher();

  messageForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  get subjectFormCtl() {
    return this.messageForm.get('subject') as FormControl;
  }
  get bodyFormCtl() {
    return this.messageForm.get('body') as FormControl;
  }

  getSubjectErrorMessage() {
    return this.subjectFormCtl.getError('required') ? '請選擇項目' : '';
  }

  getBodyErrorMessage() {
    return this.bodyFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<MessagePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessagePreviewDialogData,
  ) {
    this.subjectFormCtl.setValue(data.subject);
    this.bodyFormCtl.setValue(data.body);
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
