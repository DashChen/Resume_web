import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { FormErrorStateMatcher } from "@app/core";
import { IBasicDialog } from "@app/core/interfaces/basic-dialog";
import { Store } from "@ngrx/store";
import { CommonDialogComponent } from "../dialog/common-dialog/common-dialog.component";
import { Actions as AdminActions } from '@app/shared/store/admin';
import { BaseFormComponent } from "./base-form.component";
import { DateTime } from "luxon";

@Component({template: ''})
export class BaseComponent extends BaseFormComponent {
  dialogConfig: IBasicDialog = {} as IBasicDialog;

  constructor(
      public readonly store: Store,
      public readonly dialog: MatDialog,
      ) {
      super();
    }

  failDialog(title: string, subtitle: string, successBtnText: string = '關閉') {
      this.dialogConfig.icon = 'unsuccessful';
      this.dialogConfig.title = title;
      this.dialogConfig.subTitle = subtitle;
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.successBtnText = successBtnText;
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        height: '311px',
        maxHeight: 'calc(100vh - 48px)',
        width: '614px',
        maxWidth: 'calc(100vw - 48px)',
        data: this.dialogConfig
      });
      this.store.dispatch(AdminActions.resetErr());
      return dialogRef;
  }

  successDialog(title: string, subtitle: string, successBtnText: string = '關閉') {
    this.dialogConfig.icon = 'success';
    this.dialogConfig.title = title;
    this.dialogConfig.subTitle = subtitle;
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.successBtnText = successBtnText;
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '311px',
      maxHeight: 'calc(100vh - 48px)',
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      data: this.dialogConfig
    });
    this.store.dispatch(AdminActions.resetErr());
    return dialogRef;
  }

  errDialog(title: string, subtitle: string, successBtnText: string = '關閉', cancelBtnText: string = '') {
    this.dialogConfig.icon = 'error';
    this.dialogConfig.title = title;
    this.dialogConfig.subTitle = subtitle;
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.successBtnText = successBtnText;
    this.dialogConfig.showCancelBtn = cancelBtnText.length > 0;
    this.dialogConfig.cancelBtnText = cancelBtnText;
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '311px',
      maxHeight: 'calc(100vh - 48px)',
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      data: this.dialogConfig
    });
    this.store.dispatch(AdminActions.resetErr());
    return dialogRef;
  }

  infoDialog(title: string, subtitle: string, successBtnText: string = '確認', cancelBtnText: string = '取消') {
    this.dialogConfig.title = title;
    this.dialogConfig.subTitle = subtitle;
    this.dialogConfig.successBtnText = successBtnText;
    this.dialogConfig.cancelBtnText = cancelBtnText;
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      data: this.dialogConfig,
    });
    return dialogRef;
  }
}