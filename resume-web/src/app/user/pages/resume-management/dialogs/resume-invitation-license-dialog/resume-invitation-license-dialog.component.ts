import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-invitation-license-dialog',
  templateUrl: './resume-invitation-license-dialog.component.html',
  styleUrls: ['./resume-invitation-license-dialog.component.scss']
})
export class ResumeInvitationLicenseDialogComponent implements OnInit {

  isSuccess: boolean = false;

  licensesControl = new FormControl([]);
  licenseList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationLicenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onLicenseRemoved(license: string) {
    const licenses = this.licensesControl.value as string[];
    this.removeFirst(licenses, license);
    this.licensesControl.patchValue(licenses);
  }

  removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? true : false);
  }

}
