import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { catchError, filter, finalize, forkJoin, from, Observable, of, Subscription, take, takeUntil, throwError } from 'rxjs';

import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { MessageSnackbarComponent } from '@app/shared/snackbar/message-snackbar/message-snackbar.component';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Store } from '@ngrx/store';
import { DataService, ResizeService } from '@app/core';
import { ApiConfig, ResumeCompanyJobsCompanyJobDto, ResumeResumeInvitationsResumeInvitationDto, ResumeShareCodesShareCodeDto } from '@app/core/models/Api';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { BreakPointType, DeviceType, ViewportSize } from '@app/core/interfaces/breakpoints';
import { BREAK_POINT_OPTION_TOKEN } from '@app/app.module';
import { identity, omitBy, pickBy } from 'lodash';
import { Actions as RouterActions } from '@app/shared/store/router';
import { ResumeInvitationImportDialogComponent } from '@app/admin';
import { MediaObserver } from '@angular/flex-layout';
import { ResumeInvitationSearchDialogComponent } from '../../dialogs/resume-invitation-search-dialog/resume-invitation-search-dialog.component';
import { ResumeAddPersonDialogComponent } from '../../dialogs/resume-add-person-dialog/resume-add-person-dialog.component';
import { ResumeBatchLevelEditDialogComponent } from '../../dialogs/resume-batch-level-edit-dialog/resume-batch-level-edit-dialog.component';

export interface ResumeDialogData extends basicDialog {
  item: ResumeResumeInvitationsResumeInvitationDto;
  jobOptions: ISelectOption[];
}

export interface ResumeSearchDialogData extends basicDialog {
  stageOptions: ISelectOption[];
  jobOptions: ISelectOption[];
  writeStatusOptions: ISelectOption[];
}

@Component({
  selector: 'admin-resume-invitation-list',
  templateUrl: './resume-invitation-list.component.html',
  styleUrls: ['./resume-invitation-list.component.scss']
})
export class ResumeInvitationListComponent extends BaseComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  override dialogConfig: ResumeDialogData = {} as ResumeDialogData;

  showSend!: boolean;
  showSend$!: Subscription;

  searchForm = new FormGroup({
    Name: new FormControl(''),
    Stage: new FormControl(null),
    JobName: new FormControl(null),
    WriteStatus: new FormControl(null),
  });

  jobList: ResumeCompanyJobsCompanyJobDto[] = [];

  stageOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  writeStatusOptions: ISelectOption[] = [];

  stageTpls$ = this.store.select(CommonSelectors.selectStageList);
  stageList: ResumeShareCodesShareCodeDto[] = [];
  writeStatusTpls$ = this.store.select(CommonSelectors.selectWriteStatusList);
  writeStatusList: ResumeShareCodesShareCodeDto[] = [];

  // ---- table ----
  displayedColumns: string[] = ['select', 'name', 'phone', 'email', 'jobName', 'stage', 'writeStatus', 'action'];
  originalData: ResumeResumeInvitationsResumeInvitationDto[] = [];
  dataSource = new MatTableDataSource<ResumeResumeInvitationsResumeInvitationDto>([]);
  selection = new SelectionModel<ResumeResumeInvitationsResumeInvitationDto>(true, []);

  disabledDelBtn: boolean = true;
  disabledBatchEditBtn: boolean = true;

  // 使否響應小版(Figma 上的SP)
  isSP: boolean = false;

  // ---- SnackBar ----
  configSuccess: MatSnackBarConfig = {
    panelClass: 'success-snackbar',
    duration: 100000,
    // horizontalPosition: 'left',
    // verticalPosition: 'bottom',
  };

  //
  headerColspan: number = 1;

  // ---- paginator ----
  totalPage: number = 0;
  totalPageList: number[] = [];
  length = 100;
  pageSize = 10;

  pageSizeOptions: number[] = [5, 10, 25, 100];
  manualPage: number = 0;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  // MatPaginator Output
  pageEvent: PageEvent | null = null;

  requestJobData$;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public snackBar: MatSnackBar,
    private dataService: DataService<ApiConfig>,
    private resizeService: ResizeService,
    public mediaObserver: MediaObserver,
    @Inject(BREAK_POINT_OPTION_TOKEN) public breakpointOption: BreakPointType,
  ) {
    super(store, dialog);
    mediaObserver.asObservable().subscribe(res => {
      console.log('mediaObserver', res);
      res.forEach(mediaChange => {
        if (mediaChange.mqAlias === 'lt-md' && mediaChange.matches) {
          this.isSP = true;
        }
      })
    });
    // 取得履歷列表
    this.fetchResumes();
    // 取得職缺管理
    this.requestJobData$ = from(
      this.dataService.api.appCompanyJobsGetListByCompanyIdList({
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    );
    this.resizeService.onResize$.subscribe((size: ViewportSize) => {
      console.log('ViewportSize', size);
      if (size.width <= this.breakpointOption[DeviceType.Mobile]) {
        this.headerColspan = this.displayedColumns.length;
      } else {
        this.headerColspan = 1;
      }
    });
    // 階段
    this.stageTpls$.pipe(
      filter(res => Array.isArray(res) && res.length > 0),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      console.log('getStageList', list);
      this.stageList = list || [];
      this.stageOptions = list.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
    // 寫入狀態
    this.writeStatusTpls$.pipe(
      filter(res => Array.isArray(res) && res.length > 0),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      console.log('getWriteStatus', list);
      this.writeStatusList = list || [];
      this.writeStatusOptions = list.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
  }

  ngOnInit(): void {
    // this.showSend$ = this.resumeInvitationService.showSend$.subscribe(value => {
    //   this.showSend = value;
    // });
  }

  fetchResumes(query = {}) {
    const httpRequest = from(
      this.dataService.api.appResumeInvitationsList(query, {
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    ).pipe(
      catchError(err => {
        return throwError(() => {
          const errMsg = `${err.error.error.message}`;
          this.store.dispatch(CommonActions.setErr({
            payload: {
              errMsg
            }
          }));
          return new Error(errMsg);
        });
      }),
      finalize(() => {
        this.dataSource.data = [...this.originalData];
        this.updatePageInfo(this.dataSource.data.length);
        httpRequest.unsubscribe();
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        console.log('appResumeInvitationsList', value);
        this.originalData = value.data.items || [] as ResumeResumeInvitationsResumeInvitationDto[];
      },
      error: (err) => {console.log(err)},
    });
  }

  ngAfterViewInit(): void {
    this.fetchResumes();

    const httpRequest = this.requestJobData$.pipe(
      catchError(err => {
        return throwError(() => {
          const errMsg = `${err.error.error.message}`;
          this.store.dispatch(CommonActions.setErr({
            payload: {
              errMsg
            }
          }));
          return new Error(errMsg);
        });
      }),
      finalize(() => {
        // console.log('finalize httpRequest unsubscribe');
        httpRequest.unsubscribe();
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        console.log('appCompanyJobsGetListByCompanyIdList', value.data);
        this.jobList = value.data;
        this.jobOptions = value.data.map(item => {
          return {
            text: item.jobName,
            key: item.id
          } as ISelectOption;
        })
      },
    });
  }

  public updatePageInfo(length: number) {
    this.length = length;
    this.totalPage = Math.ceil(length / this.pageSize);
    this.totalPageList = Array.from(Array(this.totalPage).keys());
    this.dataSource.paginator = this.paginator;
  }

  public updatePageSize(index: number) {
    this.pageSize = index;
    this.paginator.pageSize = index;
    this.updatePageInfo(this.dataSource.data.length);
  }

  public updateManualPage(index: number): void {
    this.manualPage = index;
    this.paginator.pageIndex = index;
    this.dataSource.paginator = this.paginator;
  }

  public clearManualPage(): void {
    this.manualPage = 0;
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
  }

  public getPaginatorData(event: PageEvent) {
    console.log('getPaginatorData', event);
    this.manualPage = event.pageIndex;
    this.disablePrev = event.pageIndex === 0;
    this.disableNext = event.pageIndex === (this.totalPage - 1);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  rowToggle(row: ResumeResumeInvitationsResumeInvitationDto) {
    this.selection.toggle(row);
    this.disabledBatchEditBtn = this.selection.selected.length === 0;
    this.disabledDelBtn = this.selection.selected.length === 0;
  }

  addPerson(event: MouseEvent) {
    this.dialogConfig.title = '新增人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(ResumeAddPersonDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      data: {
        ...this.dialogConfig,
        item: {
          name: '',
          phone: '',
          idno: '',
          email: '',
          jobName: null,
          stage: null,
        } as ResumeResumeInvitationsResumeInvitationDto,
        jobOptions: this.jobOptions
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 送出新增人員請求
        const httpRequest$ = from(this.dataService.api.appResumeInvitationsCreate(result, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        })).pipe(
          catchError(err => {
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            console.log('finalize httpRequest unsubscribe');
            this.dataSource.data = [...this.originalData];
            httpRequest$.unsubscribe();
          }),
          takeUntil(this.destroy$)
        ).subscribe(res => {
          console.log('appResumeInvitationsCreate', res);
          this.originalData.unshift(res.data);
        });
      }
    });
  }

  importPersons(event: MouseEvent) {
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(ResumeInvitationImportDialogComponent, {
      height: '311px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      data: {
        ...this.dialogConfig,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
      }
    });
  }

  search(event: MouseEvent) {
    event.preventDefault();
    if (this.isSP) {
      this.dialogConfig.title = '人員搜尋';
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.successBtnText = '查詢';
      const dialogRef = this.dialog.open(ResumeInvitationSearchDialogComponent, {
        height: '617px',
        width: '567px',
        maxWidth: 'calc(100vw - 48px)',
        maxHeight: '85vh',
        data: {
          ...this.dialogConfig,
          stageOptions: this.stageOptions,
          jobOptions: this.jobOptions,
          writeStatusOptions: this.writeStatusOptions,
        }
      });
      dialogRef.afterClosed().subscribe(
        res => {
          console.log(res);
          const query = omitBy(res, v => v == null || v == '');
          if (query['JobName'] && query['JobName'].toString().includes('-')) {
            const jobOption = this.jobOptions.find(_job => _job.key === query['JobName']);
            if (jobOption) {
              query['JobName'] = jobOption.text;
            }
          }
          this.fetchResumes(query);
        }
      );
    } else {
      const query = omitBy(this.searchForm.value, v => v == null || v == '');
      console.log(query);
      if (query['JobName'] && query['JobName'].toString().includes('-')) {
        const jobOption = this.jobOptions.find(_job => _job.key === query['JobName']);
        if (jobOption) {
          query['JobName'] = jobOption.text;
        }
      }
      this.fetchResumes(query);
    }
  }

  showSendMsg(show: boolean) {
    this.store.dispatch(RouterActions.Go({
      path: ['/admin/resume-invitation/send-message']
    }));
  }

  batchEdit(event: MouseEvent) {
    this.dialogConfig.title = '批次階段編輯';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(ResumeBatchLevelEditDialogComponent, {
      height: '353px',
      width: '614px',
      maxWidth: '100%',
      data: {
        ...this.dialogConfig,
        options: this.stageOptions
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const selectedIds: string[] = [];
        const requestList: Observable<any>[] = [];
        // todo: 變更被選擇的階段
        this.selection.selected.forEach(({ id }) => {
          selectedIds.push(id as string);
          const item = this.dataSource.data.find(item => item.id === id);
          if (item) {
            requestList.push(of(this.dataService.api.appResumeInvitationsUpdate(id as string, {
              stage: result.stage,
              phone: item.phone as string,
              email: item.email as string,
            }, {
              headers: {
                ...this.dataService.getAuthorizationToken('admin')
              }
            })));
          }
        });
        const requestList$ = forkJoin(requestList).pipe(
          catchError(err => {
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            this.selection.clear();
            this.originalData = this.originalData.map(item => {
              if (selectedIds.includes(item.id || '')) {
                item.stage = result.stage;
              }
              return item;
            });
            // console.log('finalize httpRequest unsubscribe', this.originalData);
            this.dataSource.data = [...this.originalData];
            requestList$.unsubscribe();
          }),
          takeUntil(this.destroy$),
        ).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }

  delItems(event: MouseEvent) {
    this.dialogConfig.title = '刪除履歷項目';
    this.dialogConfig.subTitle = '確定要刪除所選擇的項目嗎？';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.showCancelBtn = true;
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '614px',
      panelClass: 'app-common-dialog--mobile',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 送出刪除職缺請求
        const selectedIds: string[] = [];
        const requestList: Observable<any>[] = [];
        // todo: 變更被選擇的階段
        this.selection.selected.forEach(({ id }) => {
          selectedIds.push(id as string);
          requestList.push(of(this.dataService.api.appResumeInvitationsDelete(id as string, {
            headers: {
              ...this.dataService.getAuthorizationToken('admin')
            }
          })));
        });
        const requestList$ = forkJoin(requestList).pipe(
          catchError(err => {
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            this.selection.clear();
            selectedIds.forEach(id => {
              const index = this.originalData.findIndex(_item => _item.id === id);
              if (index > -1) {
                this.originalData.splice(index, 1);
              }
            });
            // console.log('finalize httpRequest unsubscribe', this.originalData);
            this.dataSource.data = [...this.originalData];
            requestList$.unsubscribe();
          }),
          takeUntil(this.destroy$),
        ).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }

  editItem(item: ResumeResumeInvitationsResumeInvitationDto) {
    this.dialogConfig.title = '編輯人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(ResumeAddPersonDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      panelClass: 'admin-resume-invitation-list__dialog--edit',
      data: {
        ...this.dialogConfig,
        item: {
          name: item.name,
          phone: item.phone,
          idno: item.accountCode,
          email: item.email,
          // TODO 應該要 jobID
          jobName: item.jobName,
          stage: item.stage,
        } as ResumeResumeInvitationsResumeInvitationDto,
        jobOptions: this.jobOptions
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        let jobName = result.jobName;
        if (jobName.toString().includes('-')) {
          const jobOption = this.jobOptions.find(_job => _job.key === jobName);
          if (jobOption) {
            jobName = jobOption.text;
          }
        }
        const _newItem = {...item, ...result, jobName};
        const request$ = from(this.dataService.api.appResumeInvitationsUpdate(item.id as string, _newItem, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        })).pipe(
          catchError(err => {
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            const index = this.originalData.findIndex(_item => _item.id === item.id);
            if (index > -1) {
              this.originalData.splice(index, 1, _newItem);
            }
            // console.log('finalize httpRequest unsubscribe', this.originalData);
            this.dataSource.data = [...this.originalData];
            request$.unsubscribe();
          }),
          takeUntil(this.destroy$),
        ).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }

  copyUrl(item: ResumeResumeInvitationsResumeInvitationDto) {
    // console.log('copyUrl', item);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      ...this.configSuccess,
      duration: 3000,
      data: {
        title: '連結複製成功',
        textIcon: 'check-circle',
        actionIcon: 'close-icon',
      }
    });
    // TODO API 提供資料有疑慮
    navigator.clipboard.writeText('');
  }
}
