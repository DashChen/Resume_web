import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-invitation-title-dialog',
  templateUrl: './resume-invitation-title-dialog.component.html',
  styleUrls: ['./resume-invitation-title-dialog.component.scss']
})
export class ResumeInvitationTitleDialogComponent implements OnInit {

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? true : false);
  }

}
