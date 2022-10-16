import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-resume-invitation-work-dialog',
  templateUrl: './resume-invitation-work-dialog.component.html',
  styleUrls: ['./resume-invitation-work-dialog.component.scss']
})
export class ResumeInvitationWorkDialogComponent extends BaseFormComponent {

  workForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    dateA: new FormControl(''),
    dateD: new FormControl(''),
    jobDescription: new FormControl('', [Validators.maxLength(2000)]),
  });

  get nameFormCtl() {
    return this.workForm.get('name') as FormControl;
  }

  getNameErrorMessage() {
    return this.nameFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get jobTitleFormCtl() {
    return this.workForm.get('jobTitle') as FormControl;
  }

  getJobTitleNameErrorMessage() {
    return this.jobTitleFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get dateAFormCtl() {
    return this.workForm.get('dateA') as FormControl;
  }

  get dateDFormCtl() {
    return this.workForm.get('dateD') as FormControl;
  }

  get jobDescriptionFormCtl() {
    return this.workForm.get('jobDescription') as FormControl;
  }

  getJobDescriptionErrorMessage() {
    return this.jobDescriptionFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  dateFilter = (d: Date | null): boolean => {
    let date;
    if (!d) {
      date = DateTime.now().toJSDate();
    } else if (d instanceof DateTime) {
      date = d.toJSDate();
    } else {
      date = d;
    }
    const choiceD = DateTime.fromJSDate(date).valueOf();
    const minD = this.minDate.valueOf();
    let maxD;
    if (!this.dateDFormCtl.value) {
      maxD = this.maxDate.valueOf();
    } else if (this.dateDFormCtl.value instanceof DateTime) {
      maxD = this.dateDFormCtl.value.toJSDate();
    } else {
      maxD = DateTime.fromJSDate(this.dateDFormCtl.value).valueOf();
    }
    return choiceD >= minD && choiceD <= maxD;
  }

  dateFilterE = (d: Date | null): boolean => {
    let date;
    if (!d) {
      date = DateTime.now().toJSDate();
    } else if (d instanceof DateTime) {
      date = d.toJSDate();
    } else {
      date = d;
    }
    const choiceD = DateTime.fromJSDate(date).valueOf();
    let minD;
    if (!this.dateAFormCtl.value) {
      minD = this.maxDate.valueOf();
    } else if (this.dateAFormCtl.value instanceof DateTime) {
      minD = this.dateAFormCtl.value.toJSDate();
    } else {
      minD = DateTime.fromJSDate(this.dateAFormCtl.value).valueOf();
    }
    const maxD = this.maxDate.valueOf();
    return choiceD >= minD && choiceD <= maxD;
  }

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationWorkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }

  closeDialog(isSuccess: boolean) {
    if (isSuccess) {
      if (this.workForm.invalid) {
        return;
      }
    }
    this.dialogRef.close(isSuccess ? this.workForm.value : false);
  }

}
