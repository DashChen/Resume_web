import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { FormErrorStateMatcher } from "@app/core";
import { IBasicDialog } from "@app/core/interfaces/basic-dialog";
import { Store } from "@ngrx/store";
import { CommonDialogComponent } from "../dialog/common-dialog/common-dialog.component";
import { Actions as AdminActions } from '@app/shared/store/admin';
import { BaseFormComponent } from "./base-form.component";

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
        this.dialog.open(CommonDialogComponent, {
          height: '311px',
          width: '614px',
          data: this.dialogConfig
        });
        this.store.dispatch(AdminActions.resetErr());
    }

    successDialog(title: string, subtitle: string, successBtnText: string = '關閉') {
      this.dialogConfig.icon = 'success';
      this.dialogConfig.title = title;
      this.dialogConfig.subTitle = subtitle;
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.successBtnText = successBtnText;
      this.dialog.open(CommonDialogComponent, {
        height: '311px',
        width: '614px',
        data: this.dialogConfig
      });
      this.store.dispatch(AdminActions.resetErr());
  }
}