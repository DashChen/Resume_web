import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { catchError, concatMap, finalize, from, Subscription, takeUntil, throwError } from 'rxjs';

import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeManagementService } from '@app/user/pages/shared/resume-management.service';
import { ResumeInvitationAppendixDialogComponent, ResumeInvitationAutobiographyDialogComponent, ResumeInvitationBasicDialogComponent, ResumeInvitationEducationDialogComponent, ResumeInvitationLicenseDialogComponent, ResumeInvitationProfileDialogComponent, ResumeInvitationTitleDialogComponent, ResumeInvitationWorkDialogComponent } from '@app/user/pages';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { ApiConfig, ResumeAppendicesAppendixDto, ResumeAutobiographiesAutobiographyDto, ResumeBaseBasicsBaseBasicDto, ResumeBaseBasicsBaseBasicUpdateDto, ResumeEducationsEducationDto, ResumeExperiencesExperienceDto, ResumeLicensesLicenseDto, ResumeShareCodesShareCodeDto, ResumeUserDatasUserDto } from '@app/core/models/Api';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataService, HelperService } from '@app/core';
import { HttpErrorResponse } from '@angular/common/http';
import { getEductionCodeList } from '@app/shared/store/user/user.actions';
import { DateTime } from 'luxon';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-resume-management-form',
  templateUrl: './resume-management-form.component.html',
  styleUrls: ['./resume-management-form.component.scss']
})
export class ResumeManagementFormComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {

  title: string = '我的第一份履歷表';
  logoUrl: string = '/assets/common/logo.svg';
  defaultUserPic: string = '/assets/icons/user-pic-icon.svg';
  userPicObjectUrl: string = '';
  userPic: SafeUrl = this.defaultUserPic;

  jobOptions: ISelectOption[] = [];
  sexList: ResumeShareCodesShareCodeDto[] = [];

  currentUser: ResumeUserDatasUserDto = {};
  basicInfo: ResumeBaseBasicsBaseBasicDto = {};
  invitationCode: string = '';
  resumeCode: string = '';
  eductions: ResumeEducationsEducationDto[] = [];
  experiences: ResumeExperiencesExperienceDto[] = [];
  licenses: ResumeLicensesLicenseDto[] = [];
  autobiographies: ResumeAutobiographiesAutobiographyDto[] = [];
  appendices: ResumeAppendicesAppendixDto[] = [];
  eductionCodeList: ResumeShareCodesShareCodeDto[] = [];
  graduateCodeList: ResumeShareCodesShareCodeDto[] = [];

  showDrawer: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private helperService: HelperService,
    private dataService: DataService<ApiConfig>,
    public override store: Store,
    public override dialog: MatDialog,
  ) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.store.dispatch(CommonActions.getSexList());
    // 取回 invitation code
    this.store.select(UserSelectors.selectInvitationCode).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.invitationCode = res;
    });
  // 取回 resume code
  const request$ = from(this.dataService.api.appResumeMainsGetListByAccountIdList({
    headers: {
      ...this.dataService.getAuthorizationToken('user')
    }
  })).pipe(
    catchError((err: HttpErrorResponse) => {
      // console.log(err);
      return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
    }),
    finalize(() => {
      request$.unsubscribe();
      // 取回基本資料
      this.getBasicInfo();
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
    }),
    takeUntil(this.destroy$)
  ).subscribe(res => {
    if (res.data.length > 0) {
      // 取第一筆ID當作 resumeCode
      this.store.dispatch(UserActions.setResumeBasicInfo({
        payload: {
          ...this.basicInfo,
          resumeCode: res.data[0].id
        }
      }));
      this.resumeCode = res.data[0].id || '';
    }
  });
    // this.store.select(UserSelectors.selectCurrentUser).pipe(
    //     takeUntil(this.destroy$)
    //   ).subscribe(res => {
    //     this.currentUser = res || {};
    //     this.basicInfo = {
    //       ...this.basicInfo,
    //       nameC: res?.name,
    //       email: res?.email
    //     };
    //     this.store.dispatch(UserActions.setResumeBasicInfo({ payload: this.basicInfo }));
    //   });
  }

  ngAfterViewInit(): void {
      this.store.select(CommonSelectors.selectSexList).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.sexList = res || [];
      });
      this.getEductionCodeList();
      this.getGraduateCodeList();
  }

  override ngOnDestroy(): void {
      super.ngOnDestroy();
      if (this.userPic) {
        URL.revokeObjectURL(this.userPicObjectUrl);
      }
  }

  getBasicInfo() {
    this.store.dispatch(UserActions.getBasicInfo());
    this.store.select(UserSelectors.selectResumeBasicInfo).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.basicInfo = res;
      });
  }

  getEductions() {
    this.store.dispatch(UserActions.getResumeEductions());
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
    this.store.dispatch(UserActions.getResumeExperiences());
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
    this.store.dispatch(CommonActions.getAreas());
  }

  getLicenses() {
    this.store.dispatch(UserActions.getResumeLicenses());
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
    this.store.dispatch(CommonActions.getSkills());
  }

  getAutobiographies() {
    this.store.dispatch(UserActions.getResumeAutobiographies());
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
    this.store.dispatch(UserActions.getResumeAppendices());
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

  getEductionCodeList() {
    this.store.dispatch(UserActions.getEductionCodeList());
    this.store.select(UserSelectors.selectEductionCodeList)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.eductionCodeList = res;
      });
  }

  getGraduateCodeList() {
    this.store.dispatch(UserActions.getGraduateCodeList());
    this.store.select(UserSelectors.selectGraduateCodeList)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.graduateCodeList = res;
      });
  }

  onShowPreview(show: boolean) {
    this.store.dispatch(UserActions.setReusmeTitle({ payload: this.title}));
    this.store.dispatch(RouterActions.Go({ path: ['/user/resume-management-preview'] }));
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultUserPic;
  }

  onSaveResume(): void {
    if (this.invitationCode.length === 0) {
      return;
    }
    // TODO: 判斷是否完成
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
          const request$ = from(this.dataService.api.appResumeInvitationsSendResumeUpdate({
            invitationCode: this.invitationCode,
            ResumeCode: this.resumeCode,
          }, {
            headers: {
                ...this.dataService.getAuthorizationToken('user'),
            }
          })).pipe(
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
          })
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
      maxWidth: 'calc(100vw - 48px)',
      maxHeight: '85vh',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.basicInfo = {
          ...this.basicInfo,
          ...result
        };
        this.store.dispatch(UserActions.setResumeBasicInfo({ payload: this.basicInfo }));
        if (this.basicInfo.id) {
          // 透過 effect 更新
          this.store.dispatch(UserActions.updateBasicInfo({
            payload: {
              id: this.basicInfo.id,
              data: {
                code: this.basicInfo.code,
                resumeCode: this.resumeCode,
                nameC: this.basicInfo.nameC,
                nameE: this.basicInfo.nameE,
                idNo: this.basicInfo.idNo,
                birthDate: this.basicInfo.birthDate,
                sexCode: this.basicInfo.sexCode,
                mirrageCode: this.basicInfo.mirrageCode,
                armyCode: this.basicInfo.armyCode,
                cellPhone: this.basicInfo.cellPhone,
                email: this.basicInfo.email,
                photo: this.basicInfo.photo,
                currentTel: this.basicInfo.currentTel,
                currentAdd: this.basicInfo.currentAdd,
                permanentTel: this.basicInfo.permanentTel,
                permanentAdd: this.basicInfo.permanentAdd,
              } as ResumeBaseBasicsBaseBasicUpdateDto
            }
          }));
        };
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
      maxWidth: 'calc(100vw - 48px)',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let picFile = this.helperService.dataURLtoBlob(result.toDataURL());
        if (picFile) {
          this.userPicObjectUrl = URL.createObjectURL(picFile);
          this.userPic = this.sanitizer.bypassSecurityTrustUrl(this.userPicObjectUrl);
          this.store.dispatch(UserActions.uploadProfilePicture({
            payload: {
              ImageContent: this.helperService.blobToFile(picFile, `${this.currentUser.accountId}_resume_pic.png`),
              Type: 0
            }
          }));
        }
        console.log('openProfileDialog', result, picFile);
      }
    });
  }

  openEducationDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '新增學歷',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationEducationDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      maxHeight: '85vh',
      // panelClass: '',
      data: {
        ...dialogConfig,
        item: {} as ResumeEducationsEducationDto
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // 送出新增學歷請求
      if (result) {
        console.log('openEducationDialog', result);
        this.store.dispatch(UserActions.createEduction({
          payload: {
            ...result,
            resumeCode: this.resumeCode
          }
        }));
      }
    });
  }

  // 編輯學歷
  editEduction(item: ResumeEducationsEducationDto) {
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
      data: {
        ...dialogConfig,
        item: item
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯學歷請求
      if (result && item.id) {
        console.log('editEduction', result);
        this.store.dispatch(UserActions.updateEduction({
          payload: {
            id: item.id,
            data: {
              ...result,
              resumeCode: this.resumeCode
            }
          }
        }));
      }
    });
  }

  // 刪除學歷
  delEduction(item: ResumeEducationsEducationDto) {
    const dialogRef = this.infoDialog('確認刪除', '');
    dialogRef.afterClosed().subscribe(res => {
      if (res && item.id) {
        this.store.dispatch(UserActions.delEduction({ payload: item.id }));
      }
    });
  }

  openWorkDialog(event: MouseEvent): void {
    const dialogConfig: IBasicDialog = {
      title: '新增工作經歷',
      subTitle: '',
      successBtnText: '儲存',
      cancelBtnText: '取消',
      showSuccessBtn: true,
      showCancelBtn: true,
    };
    const dialogRef = this.dialog.open(ResumeInvitationWorkDialogComponent, {
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      height: 'auto',
      maxHeight: '85vh',
      // panelClass: '',
      data: {
        ...dialogConfig,
        item: {} as ResumeExperiencesExperienceDto
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('openLicenseDialog', result);
        this.store.dispatch(UserActions.createExperience({
          payload: result
        }));
      }
    });
  }
  // 編輯經歷
  editExperience(item: ResumeExperiencesExperienceDto) {
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
      maxWidth: 'calc(100vw - 48px)',
      height: 'auto',
      maxHeight: '85vh',
      // panelClass: '',
      data: {
        ...dialogConfig,
        item: item
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('editExperience', result);
        this.store.dispatch(UserActions.updateExperience({
          payload: result
        }));
      }
    });
  }
  // 刪除經歷
  delExperience(item: ResumeExperiencesExperienceDto) {
    const dialogRef = this.infoDialog('確認刪除', '');
    dialogRef.afterClosed().subscribe(res => {
      if (res && item.id) {
        this.store.dispatch(UserActions.delExperience({ payload: item.id }));
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
      maxWidth: 'calc(100vw - 48px)',
      // panelClass: '',
      data: dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯專業證照請求
      if (result) {
        console.log('openLicenseDialog', result);
        this.licenses = [
          ...(Array.isArray(this.licenses) ? this.licenses : []),
          {
            name: result.name,
            note: result.note
          }
        ];
        this.store.dispatch(UserActions.createLicense({
          payload: {
            name: result.name,
            note: result.note,
            resumeCode: this.resumeCode,
          },
        }));
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
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
      // panelClass: '',
      data: {
        ...dialogConfig,
        // TODO
        autobiographies: this.autobiographies[0].content || '',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯自傳請求
      if (result && this.autobiographies[0].id) {
        console.log('openAutobiographyDialog', result);
        this.store.dispatch(UserActions.updateAutobiography({
          payload: {
            id: this.autobiographies[0].id,
            data: {
              resumeCode: this.autobiographies[0].resumeCode,
              content: result.autobiographies
            }
          },
        }));
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
      width: '614px',
      maxWidth: 'calc(100vw - 48px)',
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
        if (result.AppendixType === 'file' && Array.isArray(result.createFileInputWithStream)) {
          for(let i in result.createFileInputWithStream) {
            this.store.dispatch(UserActions.createAppendices({
              payload: {
                createFileInputWithStream: result.createFileInputWithStream[i],
                query: {
                  ResumeCode: this.resumeCode,
                  AppendixName: result.AppendixName,
                  AppendixContent: result.AppendixContent
                }
              }
            }));
          }
        } else {
          this.store.dispatch(UserActions.createAppendices({
            payload: {
              createFileInputWithStream: undefined,
              query: {
                ResumeCode: this.resumeCode,
                AppendixName: result.AppendixName,
                AppendixContent: result.AppendixContent
              }
            }
          }));
        }
      }
    });
  }
  // 刪除附件
  delAppendix(item: ResumeAppendicesAppendixDto) {
    const dialogRef = this.infoDialog('確認刪除', '');
    dialogRef.afterClosed().subscribe(res => {
      if (res && item.id) {
        this.store.dispatch(UserActions.delAppendice({ payload: item.id }));
      }
    });
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

  goTitle(id: string) {
    window.location.hash = '#' + id;
  }

  changeDrawer() {
    this.showDrawer = !this.showDrawer;
  }
}
