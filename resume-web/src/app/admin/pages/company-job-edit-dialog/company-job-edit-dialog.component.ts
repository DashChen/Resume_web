import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { CompanyJobDialogData } from '@app/admin/pages/company-job-list/company-job-list.component';

@Component({
  selector: 'admin-company-job-edit-dialog',
  templateUrl: './company-job-edit-dialog.component.html',
  styleUrls: ['./company-job-edit-dialog.component.scss']
})
export class CompanyJobEditDialogComponent implements OnInit {

  isSuccess: boolean = false;

  mailTplCodeOptions: ISelectOption[] = [
    { text: '第一階段', key: '第一階段' },
    { text: '第二階端', key: '第二階端' },
  ];

  smsTplCodeOptions: ISelectOption[] = [
    { text: '第一階段', key: '第一階段' },
    { text: '第二階端', key: '第二階端' },
  ];

  matcher = new FormErrorStateMatcher();

  editForm = new FormGroup({
    jobName: new FormControl(this.data.item?.jobName, [Validators.required, Validators.pattern('[\\W]+')]),
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
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      this.jobNameFormCtl.setValidators([Validators.required]);
      this.jobNameFormCtl.updateValueAndValidity({ onlySelf: true });
      this.mailTplCodeFormCtl.setValidators([Validators.required]);
      this.mailTplCodeFormCtl.updateValueAndValidity({ onlySelf: true });
      this.smsTplCodeFormCtl.setValidators([Validators.required]);
      this.smsTplCodeFormCtl.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.editForm.value : false);
  }

}
