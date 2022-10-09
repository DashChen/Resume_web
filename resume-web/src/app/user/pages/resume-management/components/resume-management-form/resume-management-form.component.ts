import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeManagementService } from '@app/user/pages/shared/resume-management.service';
import { ResumeInvitationAppendixDialogComponent, ResumeInvitationAutobiographyDialogComponent, ResumeInvitationBasicDialogComponent, ResumeInvitationEducationDialogComponent, ResumeInvitationLicenseDialogComponent, ResumeInvitationProfileDialogComponent, ResumeInvitationTitleDialogComponent, ResumeInvitationWorkDialogComponent } from '@app/user/pages';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';

@Component({
  selector: 'app-resume-management-form',
  templateUrl: './resume-management-form.component.html',
  styleUrls: ['./resume-management-form.component.scss']
})
export class ResumeManagementFormComponent extends BaseComponent implements OnInit, OnDestroy {

  title: string = '我的第一份履歷表';
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
      const dialogConfig: IBasicDialog = {
        icon: 'notice',
        title:'即將送出履歷!',
        subTitle:'您即將送出履歷，請確認所有填寫內容，送出後您填寫的資料會轉至人資。',
        successBtnText: '確認',
        cancelBtnText: '取消',
        showSuccessBtn: true,
        showCancelBtn: true,
      };
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        width: '614px',
        data: dialogConfig
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // todo: 送出更新履歷請求
        if (result) {
          //
        }
      });
    } else {
      const dialogConfig: IBasicDialog = {
        icon: 'unsuccessful',
        title: '您的履歷尚未完成!',
        subTitle: '您的履歷尚未填寫完成，請繼續填寫履歷，完成履歷。',
        successBtnText: '確認',
        cancelBtnText: '',
        showSuccessBtn: true,
        showCancelBtn: false,
      };
      this.dialog.open(CommonDialogComponent, {
        height: '311px',
        width: '614px',
        data: dialogConfig
      });
    }
  }

  openTitleDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '更改履歷名稱',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationTitleDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: {
        ...dialogConfig,
        resumeTitle: this.title,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出更改履歷名稱請求
      if (result) {
        console.log('openTitleDialog', result);
        this.title = result.title;
      }
    });
  }

  openBasicDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯基本資料',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationBasicDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯基本資料請求
      if (result) {
        console.log('openBasicDialog', result);
      }
    });
  }

  openProfileDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '上傳履歷大頭照',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationProfileDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出上傳履歷大頭照請求
      if (result) {
        console.log('openProfileDialog', result);
      }
    });
  }

  openEducationDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯學歷',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationEducationDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯學歷請求
      if (result) {
        console.log('openEducationDialog', result);
      }
    });
  }

  openWorkDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯工作經歷',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationWorkDialogComponent, {
      width: '614px',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯工作經歷請求
      if (result) {
        console.log('openLicenseDialog', result);
      }
    });
  }

  openLicenseDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯專業證照',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationLicenseDialogComponent, {
      width: '614px',
      maxWidth: '100%',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯專業證照請求
      if (result) {
        console.log('openLicenseDialog', result);
      }
    });
  }

  openAutobiographyDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯自傳',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationAutobiographyDialogComponent, {
      width: '100%',
      maxWidth: '614px',
      height: '100%',
      maxHeight: '417px',
      // panelClass: '',
      data: {
        ...dialogConfig,
        // TODO
        autobiographies: '',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯自傳請求
      if (result) {
        console.log('openAutobiographyDialog', result);
      }
    });
  }

  openAppendixDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '編輯附件',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationAppendixDialogComponent, {
      width: '100%',
      maxWidth: '614px',
      height: 'auto',
      maxHeight: '80vh',
      // panelClass: '',
      data: {
        ...dialogConfig
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯附件請求
      if (result) {
        console.log('openAppendixDialog', result);
      }
    });
  }

}
