import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiConfig, ResumeAppendicesAppendixDto, ResumeAutobiographiesAutobiographyDto, ResumeBaseBasicsBaseBasicDto, ResumeEducationsEducationDto, ResumeExperiencesExperienceDto, ResumeLicensesLicenseDto, ResumeShareCodesShareCodeDto, ResumeUserDatasUserDto } from '@app/core/models/Api';
import { Store } from '@ngrx/store';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Selectors as CommonSelectors } from '@app/shared/store/common';
import { BaseComponent } from '@app/shared';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService, HelperService } from '@app/core';
import { catchError, throwError, takeUntil, concatMap, finalize, from } from 'rxjs';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-resume-management-preview',
  templateUrl: './resume-management-preview.component.html',
  styleUrls: ['./resume-management-preview.component.scss']
})
export class ResumeManagementPreviewComponent extends BaseComponent implements OnInit {
  isAdmin: boolean = false;
  title: string = '';
  logoUrl: string = '/assets/common/logo.svg';

  sexList: ResumeShareCodesShareCodeDto[] | null = null;
  basicInfo: ResumeBaseBasicsBaseBasicDto = {};
  eductions: ResumeEducationsEducationDto[] = [];
  experiences: ResumeExperiencesExperienceDto[] = [];
  licenses: ResumeLicensesLicenseDto[] = [];
  autobiographies: ResumeAutobiographiesAutobiographyDto[] = [];
  appendices: ResumeAppendicesAppendixDto[] = [];
  eductionCodeList: ResumeShareCodesShareCodeDto[] = [];
  graduateCodeList: ResumeShareCodesShareCodeDto[] = [];


  constructor(
    private sanitizer: DomSanitizer,
    private helperService: HelperService,
    private dataService: DataService<ApiConfig>,
    public override store: Store,
    public override dialog: MatDialog,
  ) {
    super(store, dialog);
    this.store.select(CommonSelectors.selectIsAdmin)
      .subscribe(res => {
        this.isAdmin = res;
      });
    this.store.select(UserSelectors.selectResumeTitle)
      .subscribe(res => {
        this.title = res;
      });
    this.store.select(UserSelectors.selectResumeBasicInfo)
      .subscribe(res => {
        this.basicInfo = res;
      });
    this.store.select(CommonSelectors.selectSexList)
      .subscribe(res => {
        this.sexList = res;
      });
  }

  ngOnInit(): void {
    this.getEductionCodeList();
    this.getGraduateCodeList();
    // 取回學歷
    this.getEductions();
    // 取回經歷
    this.getExperiences();
    // 取回專業證照
    this.getLicenses();
    // 取回自傳
    this.getAutobiographies();
    // 取回附件
    this.getAppendices();
  }

  getEductionCodeList() {
    this.store.dispatch(UserActions.getEductionCodeList());
    this.store.select(UserSelectors.selectEductionCodeList)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.eductionCodeList = res;
      });
  }

  getGraduateCodeList() {
    this.store.dispatch(UserActions.getGraduateCodeList());
    this.store.select(UserSelectors.selectGraduateCodeList)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.graduateCodeList = res;
      });
  }

  getEductions() {
    this.store.select(UserSelectors.selectResumeEductions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.eductions = res;
      });
  }

  getExperiences() {
    this.store.select(UserSelectors.selectResumeExperiences)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.experiences = res;
      });
  }

  getLicenses() {
    this.store.select(UserSelectors.selectResumeLicenses)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.licenses = res;
      });
  }

  getAutobiographies() {
    this.store.select(UserSelectors.selectResumeAutobiographies)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.autobiographies = res;
      });
  }

  getAppendices() {
    this.store.select(UserSelectors.selectResumeAppendices)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.appendices = res;
      });
  }

  goToEdit() {
    if (this.isAdmin) {
      this.store.dispatch(RouterActions.Go({ path: ['admin', 'message', 'email']}));
    } else {
      this.store.dispatch(RouterActions.Go({ path: ['/user/resume-management']}));
    }
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = '/assets/icons/user-pic-icon.svg';
  }

  getStayMonth(item: ResumeExperiencesExperienceDto) {
    if (!item.dateA) {
      return '';
    }
    let dateD;
    if (!item.dateD) {
      dateD = DateTime.now();
    } else {
      dateD = DateTime.fromISO(item.dateD);
    }
    const diff = DateTime.fromISO(item.dateA).diff(dateD, ['years', 'months']);
    if (diff.years) {
      return `${Math.abs(diff.years)}年${Math.abs(diff.months)}月`;
    }
    return `${Math.round(Math.abs(diff.months))}月`;
  }

  downloadAppendixFile(event: MouseEvent, item: ResumeAppendicesAppendixDto) {
    event.stopPropagation();
    event.preventDefault();
    // 下載附件，先取得 token
    if (!item.appendixContent) {
      return;
    }
    const id = item.appendixContent;
    const request$ = from(this.dataService.api.fileManagementFileDescriptorDownloadTokenDetail(id, {
      headers: {
        ...this.dataService.getAuthorizationToken('user')
      }
    })).pipe(
      concatMap((token) => from(this.dataService.api.fileManagementFileDescriptorDownloadDetail(id, {
        token: token.data.token || undefined
      }))),
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        request$.unsubscribe();
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      console.log(res);
      const a = document.createElement("a");
      const objUrl = URL.createObjectURL(res.data);
      a.href = objUrl;
      a.download = res.data.name;
      a.click();
      URL.revokeObjectURL(objUrl);
    });
  }
}
