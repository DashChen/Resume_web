import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basicDialog } from '@app/core/interfaces/basic-dialog';

export interface ResumeTitleDialogData extends basicDialog {
  resumeTitle: string;
}

@Component({
  selector: 'app-resume-invitation-title-dialog',
  templateUrl: './resume-invitation-title-dialog.component.html',
  styleUrls: ['./resume-invitation-title-dialog.component.scss']
})
export class ResumeInvitationTitleDialogComponent implements OnInit {

  titleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  get titleFormCtl() {
    return this.titleForm.get('title') as FormControl;
  }

  getTitleErrorMessage() {
    return this.titleFormCtl.hasError('required') ? '名稱必填' : '';
  }

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeTitleDialogData,
  ) {
    this.titleFormCtl.setValue(data.resumeTitle);
  }

  ngOnInit(): void {
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.titleForm.value : false);
  }

}
