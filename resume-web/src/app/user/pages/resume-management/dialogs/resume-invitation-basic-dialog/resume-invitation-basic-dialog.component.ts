import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Selectors as UserSelectors } from '@app/shared/store/user';
import { DateTime } from 'luxon';
import { BaseFormComponent } from '@app/shared/components/base-form.component';

@Component({
  selector: 'app-resume-invitation-basic-dialog',
  templateUrl: './resume-invitation-basic-dialog.component.html',
  styleUrls: ['./resume-invitation-basic-dialog.component.scss']
})
export class ResumeInvitationBasicDialogComponent extends BaseFormComponent implements OnInit {

  infoForm = new FormGroup({
    nameC: new FormControl('', [Validators.required, Validators.pattern('[\\W]+')]),
    nameE: new FormControl('', [Validators.pattern('^[a-zA-Z ]+$')]),
    idNo: new FormControl('', [Validators.pattern('[A-Z][0-9]{9}')]),
    sexCode: new FormControl(null),
    birthDate: new FormControl(''),
    currentTel: new FormControl('', [Validators.pattern('[0-9\-]+')]),
    currentAdd: new FormControl(''),
    email: new FormControl(''),
  });

  get nameCFormCtl() {
    return this.infoForm.get('nameC') as FormControl;
  }

  getNameCErrorMessage() {
    if (this.nameCFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.nameCFormCtl.hasError('pattern') ? '格式不正確，例:王大明' : '';
  }

  get nameEFormCtl() {
    return this.infoForm.get('nameE') as FormControl;
  }

  getNameEErrorMessage() {
    return this.nameEFormCtl.hasError('pattern') ? '格式不正確，例:Dash Chen' : '';
  }

  get idNoFormCtl() {
    return this.infoForm.get('idNo') as FormControl;
  }

  getIdNoErrorMessage() {
    return this.idNoFormCtl.hasError('pattern') ? '格式不正確，例:A123456789' : '';
  }

  get sexCodeFormCtl() {
    return this.infoForm.get('sexCode') as FormControl;
  }

  getsexCodeErrorMessage() {
    if (this.sexCodeFormCtl.hasError('required')) {
      return '請選擇性別'
    }
    return '';
  }

  get birthDateFormCtl() {
    return this.infoForm.get('birthDate') as FormControl;
  }

  get currentTelFormCtl() {
    return this.infoForm.get('currentTel') as FormControl;
  }

  getCurrentTelErrorMessage() {
    return this.currentTelFormCtl.hasError('pattern') ? '格式不正確，例:02-12345678' : '';
  }

  get currentAddFormCtl() {
    return this.infoForm.get('currentAdd') as FormControl;
  }

  get emailFormCtl() {
    return this.infoForm.get('email') as FormControl;
  }

  getEmailErrorMessage() {
    if (this.emailFormCtl.hasError('required')) {
      return '請填此欄位'
    }
    return this.emailFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<ResumeInvitationBasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
    this.store.select(UserSelectors.selectResumeBasicInfo)
      .subscribe(res => {
        this.nameCFormCtl.setValue(res?.nameC);
        this.nameEFormCtl.setValue(res?.nameE);
        this.idNoFormCtl.setValue(res?.idNo);
        this.sexCodeFormCtl.setValue(res?.sexCode);
        this.birthDateFormCtl.setValue(res?.birthDate);
        this.currentTelFormCtl.setValue(res?.currentTel);
        this.currentAddFormCtl.setValue(res?.currentAdd);
        this.emailFormCtl.setValue(res?.email);
      });
  }

  ngOnInit(): void {
  }


  closeDialog(isSuccess: boolean) {
    this.sexCodeFormCtl.addValidators([Validators.required]);
    this.sexCodeFormCtl.updateValueAndValidity();
    this.sexCodeFormCtl.markAsTouched();
    this.infoForm.markAllAsTouched();
    console.log(this.infoForm);
    if (this.infoForm.invalid) {
      return;
    }

    this.dialogRef.close(isSuccess ? this.infoForm.value : false);
  }
}
