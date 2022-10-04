import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-invitation-basic-dialog',
  templateUrl: './resume-invitation-basic-dialog.component.html',
  styleUrls: ['./resume-invitation-basic-dialog.component.scss']
})
export class ResumeInvitationBasicDialogComponent implements OnInit {

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationBasicDialogComponent>,
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
