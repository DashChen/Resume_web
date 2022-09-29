import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-invitation-profile-dialog',
  templateUrl: './resume-invitation-profile-dialog.component.html',
  styleUrls: ['./resume-invitation-profile-dialog.component.scss']
})
export class ResumeInvitationProfileDialogComponent implements OnInit {

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationProfileDialogComponent>,
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
