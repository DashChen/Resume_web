import { Component, OnDestroy, OnInit } from '@angular/core';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { ResumeManagementService } from '@app/user/pages/shared/resume-management.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-management-form',
  templateUrl: './resume-management-form.component.html',
  styleUrls: ['./resume-management-form.component.scss']
})
export class ResumeManagementFormComponent implements OnInit, OnDestroy {

  showPreview!: boolean;
  showPreview$!: Subscription;

  jobOptions: ISelectOption[] = [];

  constructor(
    private resumeManagementService: ResumeManagementService,
  ) { }

  ngOnInit(): void {
    this.showPreview$ = this.resumeManagementService.showPreview$.subscribe(value => {
      this.showPreview = value;
    });
  }

  ngOnDestroy(): void {
    this.showPreview$.unsubscribe();
  }

  onShowPreview(show: boolean) {
    this.resumeManagementService.updateShowPreview(show);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = '/assets/icons/user-pic-icon.svg';
  }

  openTitleDialog(event: MouseEvent): void {
    // 我的第一份履歷表
  }

  openBasicDialog(event: MouseEvent): void {
    // 基本資料
  }

  openProfileDialog(event: MouseEvent): void {
    // 上傳照片
  }

  openEducationDialog(event: MouseEvent): void {
    // 學歷
  }

  openWorkDialog(event: MouseEvent): void {
    // 工作經歷
  }

  openLicenseDialog(event: MouseEvent): void {
    // 專業證照
  }

  openAutobiographyDialog(event: MouseEvent): void {
    // 自傳
  }

  openAppendixDialog(event: MouseEvent): void {
    // 附件
  }

}
