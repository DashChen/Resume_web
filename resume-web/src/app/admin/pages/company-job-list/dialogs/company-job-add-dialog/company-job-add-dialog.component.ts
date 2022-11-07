import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { CompanyJobDialogData } from '@app/admin/pages/company-job-list/company-job-list.component';

@Component({
  selector: 'admin-company-job-add-dialog',
  templateUrl: './company-job-add-dialog.component.html',
  styleUrls: ['./company-job-add-dialog.component.scss']
})
export class CompanyJobAddDialogComponent implements OnInit {

  isSuccess: boolean = false;

  mailTplCodeOptions: ISelectOption[] = [];

  smsTplCodeOptions: ISelectOption[] = [];

  matcher = new FormErrorStateMatcher();

  addForm = new FormGroup({
    jobName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\u4E00-\u9FFF]+')]),
    mailTplCode: new FormControl('', [Validators.required]),
    smsTplCode: new FormControl('', [Validators.required]),
  });

  get jobNameFormCtl() {
    return this.addForm.get('jobName') as FormControl;
  }

  get mailTplCodeFormCtl() {
    return this.addForm.get('mailTplCode') as FormControl;
  }

  get smsTplCodeFormCtl() {
    return this.addForm.get('smsTplCode') as FormControl;
  }

  getJobNameErrorMessage() {
    if (this.jobNameFormCtl.getError('required')) {
      return '請填寫此欄位';
    }
    return this.jobNameFormCtl.hasError('pattern') ? '格式不正確，例:工程師主管' : '';
  }

  getMailTplCodeErrorMessage() {
    return this.mailTplCodeFormCtl.getError('required') ? '請選擇項目' : '';
  }

  getSmsTplCodeErrorMessage() {
    return this.smsTplCodeFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<CompanyJobAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompanyJobDialogData,
  ) {
    this.mailTplCodeOptions = data.mailList.map(d => {
      return {
        text: d.name,
        key: d.code
      } as ISelectOption;
    });
    this.smsTplCodeOptions = data.smsList.map(d => {
      return {
        text: d.name,
        key: d.code
      } as ISelectOption;
    });
  }

  ngOnInit(): void {
  }

  confirm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.addForm.value : false);
  }

}
