import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ResumeData } from '@app/core/datas';
import { ReceiverDialogData } from '../resume-invitation-send-form/resume-invitation-send-form.component';

@Component({
  selector: 'admin-resume-invitation-send-add-dialog',
  templateUrl: './resume-invitation-send-add-dialog.component.html',
  styleUrls: ['./resume-invitation-send-add-dialog.component.scss']
})
export class ResumeInvitationSendAddDialogComponent implements OnInit {

  isSuccess: boolean = false;

  editForm = new FormGroup({
    jobName: new FormControl('', [Validators.required, Validators.pattern('[\\W]+')]),
    mailTplCode: new FormControl('', [Validators.required]),
    smsTplCode: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationSendAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiverDialogData,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    const passData = Object.assign({}, this.data.item) as ResumeData;

    this.dialogRef.close(this.isSuccess ? passData : false);
  }

}
