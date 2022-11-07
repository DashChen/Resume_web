import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { CompanyJobDialogData } from '@app/admin/pages/company-job-list/company-job-list.component';
import { CompanyJobData } from '@app/core/datas';

@Component({
  selector: 'admin-company-job-edit-dialog',
  templateUrl: './company-job-edit-dialog.component.html',
  styleUrls: ['./company-job-edit-dialog.component.scss']
})
export class CompanyJobEditDialogComponent implements OnInit {

  isSuccess: boolean = false;

  mailTplCodeOptions: ISelectOption[] = [];

  smsTplCodeOptions: ISelectOption[] = [];

  matcher = new FormErrorStateMatcher();

  editForm = new FormGroup({
    jobName: new FormControl(this.data.item?.jobName, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4E00-\u9FFF]+')]),
    mailTplCode: new FormControl(this.data.item?.mailTplCode, [Validators.required]),
    smsTplCode: new FormControl(this.data.item?.smsTplCode, [Validators.required]),
  });

  get jobNameFormCtl() {
    return this.editForm.get('jobName') as FormControl;
  }

  get mailTplCodeFormCtl() {
    return this.editForm.get('mailTplCode') as FormControl;
  }

  get smsTplCodeFormCtl() {
    return this.editForm.get('smsTplCode') as FormControl;
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
    public dialogRef: MatDialogRef<CompanyJobEditDialogComponent>,
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
    if (this.editForm.invalid) {
      console.log('CompanyJobEditDialogComponent confirm', this.editForm)
      this.editForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    const passData = Object.assign({}, this.editForm.value) as CompanyJobData;
    this.dialogRef.close(this.isSuccess ? passData : false);
  }

}
