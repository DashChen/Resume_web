import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-invitation-education-dialog',
  templateUrl: './resume-invitation-education-dialog.component.html',
  styleUrls: ['./resume-invitation-education-dialog.component.scss']
})
export class ResumeInvitationEducationDialogComponent implements OnInit {

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationEducationDialogComponent>,
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
