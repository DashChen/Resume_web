import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ResumeExperiencesExperienceDto } from '@app/core/models/Api';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { DateTime } from 'luxon';

export interface ResumeInvitationWorkDialogData extends basicDialog {
  item: ResumeExperiencesExperienceDto;
}

@Component({
  selector: 'app-resume-invitation-work-dialog',
  templateUrl: './resume-invitation-work-dialog.component.html',
  styleUrls: ['./resume-invitation-work-dialog.component.scss']
})
export class ResumeInvitationWorkDialogComponent extends BaseFormComponent {

  workForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    dateA: new FormControl('', [Validators.required]),
    dateD: new FormControl('', [Validators.required]),
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

  getDateAErrorMessage() {
    if (this.dateAFormCtl.hasError('matDatepickerParse')) {
      return '日期格式錯誤';
    }
    if (this.dateAFormCtl.hasError('required')) {
      return '請填此欄位';
    }
    return '';
  }

  get dateDFormCtl() {
    return this.workForm.get('dateD') as FormControl;
  }

  getDateDErrorMessage() {
    if (this.dateDFormCtl.hasError('matDatepickerParse')) {
      return '日期格式錯誤';
    }
    if (this.dateDFormCtl.hasError('required')) {
      return '請填此欄位';
    }
    return '';
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
    @Inject(MAT_DIALOG_DATA) public data: ResumeInvitationWorkDialogData,
  ) {
    super();
    this.nameFormCtl.setValue(data.item?.name || '');
    this.jobTitleFormCtl.setValue(data.item?.jobTitle || '');
    if (data.item?.dateA) {
      this.dateAFormCtl.setValue(DateTime.fromISO(data.item?.dateA));
    } else {
      this.dateAFormCtl.setValue('');
    }
    if (data.item?.dateD) {
      this.dateDFormCtl.setValue(DateTime.fromISO(data.item?.dateD));
    } else {
      this.dateDFormCtl.setValue('');
    }
    this.jobDescriptionFormCtl.setValue(data.item?.jobDescription || '');
  }

  closeDialog(isSuccess: boolean) {
    let res: any = false;
    if (isSuccess) {
      if (this.workForm.invalid) {
        this.workForm.markAllAsTouched();
        console.log(this.workForm, this.workForm.errors);
        return;
      }

      res = {...this.workForm.value} as {
        name: string;
        jobTitle: string;
        dateA: string | DateTime;
        dateD: string | DateTime;
        jobDescription: string;
      };
      if (res.dateA instanceof DateTime) {
        res.dateA = res.dateA.toUTC().toISO();
      }
      if (res.dateD instanceof DateTime) {
        res.dateD = res.dateD.toUTC().toISO();
      }
    }
    this.dialogRef.close(res);
  }
}
