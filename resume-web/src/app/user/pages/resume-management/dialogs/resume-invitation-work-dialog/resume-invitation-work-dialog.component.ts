import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';

@Component({
  selector: 'app-resume-invitation-work-dialog',
  templateUrl: './resume-invitation-work-dialog.component.html',
  styleUrls: ['./resume-invitation-work-dialog.component.scss']
})
export class ResumeInvitationWorkDialogComponent implements OnInit {

  isSuccess: boolean = false;

  educationOptions: ISelectOption[] = [
    { text: '國小', key: 0 },
    { text: '國中', key: 1 },
    { text: '高中', key: 2 },
  ];

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationWorkDialogComponent>,
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
