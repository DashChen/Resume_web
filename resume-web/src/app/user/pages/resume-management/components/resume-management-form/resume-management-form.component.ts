import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeManagementService } from '@app/user/pages/shared/resume-management.service';
import { ResumeInvitationAppendixDialogComponent, ResumeInvitationAutobiographyDialogComponent, ResumeInvitationBasicDialogComponent, ResumeInvitationEducationDialogComponent, ResumeInvitationLicenseDialogComponent, ResumeInvitationProfileDialogComponent, ResumeInvitationTitleDialogComponent, ResumeInvitationWorkDialogComponent } from '@app/user/pages';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';

@Component({
  selector: 'app-resume-management-form',
  templateUrl: './resume-management-form.component.html',
  styleUrls: ['./resume-management-form.component.scss']
})
export class ResumeManagementFormComponent extends BaseComponent implements OnInit, OnDestroy {

  showPreview!: boolean;
  showPreview$!: Subscription;

  jobOptions: ISelectOption[] = [];

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    private resumeManagementService: ResumeManagementService,
  ) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.showPreview$ = this.resumeManagementService.showPreview$.subscribe(value => {
      this.showPreview = value;
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.showPreview$.unsubscribe();
  }

  onShowPreview(show: boolean) {
    this.resumeManagementService.updateShowPreview(show);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = '/assets/icons/user-pic-icon.svg';
  }

  onSaveResume(event: MouseEvent): void {
    if (true) {
      this.dialogConfig.icon ='notice';
      this.dialogConfig.title ='即將送出履歷!';
      this.dialogConfig.subTitle ='您即將送出履歷，請確認所有填寫內容，送出後您填寫的資料會轉至人資。';
      this.dialogConfig.successBtnText = '確認';
      this.dialogConfig.cancelBtnText = '取消';
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.showCancelBtn = true;  
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        width: '614px',
        data: this.dialogConfig
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // todo: 送出更新履歷請求
        if (result) {
          //
        }
      });
    } else {
      this.dialogConfig.icon = 'unsuccessful';
      this.dialogConfig.title = '您的履歷尚未完成!';
      this.dialogConfig.subTitle = '您的履歷尚未填寫完成，請繼續填寫履歷，完成履歷。';
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.successBtnText = '確認';
      this.dialog.open(CommonDialogComponent, {
        height: '311px',
        width: '614px',
        data: this.dialogConfig
      });
    }
  }

  openTitleDialog(event: MouseEvent): void {
    this.dialogConfig.title = '更改履歷名稱';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationTitleDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出更改履歷名稱請求
      if (result) {
        console.log('openTitleDialog', result);
      }
    });
  }

  openBasicDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯基本資料';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationBasicDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯基本資料請求
      if (result) {
        console.log('openBasicDialog', result);
      }
    });
  }

  openProfileDialog(event: MouseEvent): void {
    this.dialogConfig.title = '上傳履歷大頭照';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationProfileDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出上傳履歷大頭照請求
      if (result) {
        console.log('openProfileDialog', result);
      }
    });
  }

  openEducationDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯學歷';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationEducationDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯學歷請求
      if (result) {
        console.log('openEducationDialog', result);
      }
    });
  }

  openWorkDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯工作經歷';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationWorkDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯工作經歷請求
      if (result) {
        console.log('openLicenseDialog', result);
      }
    });
  }

  openLicenseDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯專業證照';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationLicenseDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯專業證照請求
      if (result) {
        console.log('openLicenseDialog', result);
      }
    });
  }

  openAutobiographyDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯自傳';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationAutobiographyDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯自傳請求
      if (result) {
        console.log('openAutobiographyDialog', result);
      }
    });
  }

  openAppendixDialog(event: MouseEvent): void {
    this.dialogConfig.title = '編輯附件';
    this.dialogConfig.successBtnText = '儲存';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(ResumeInvitationAppendixDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯附件請求
      if (result) {
        console.log('openAppendixDialog', result);
      }
    });
  }

}
