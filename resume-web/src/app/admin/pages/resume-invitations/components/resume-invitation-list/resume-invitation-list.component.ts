import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { catchError, filter, finalize, from, Subscription, take, takeUntil, throwError } from 'rxjs';

import { ResumeData } from '@app/core/datas';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { AddPersonDialogComponent } from '@app/shared/dialog/add-person-dialog/add-person-dialog.component';
import { BatchLevelEditDialogComponent } from '@app/shared/dialog/batch-level-edit-dialog/batch-level-edit-dialog.component';
import { MessageSnackbarComponent } from '@app/shared/snackbar/message-snackbar/message-snackbar.component';
import { ResumeInvitationService } from '../../..';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Store } from '@ngrx/store';
import { DataService, ResizeService } from '@app/core';
import { ApiConfig, ResumeCompanyJobsCompanyJobDto, ResumeResumeInvitationsResumeInvitationDto, ResumeShareCodesShareCodeDto } from '@app/core/models/Api';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { BreakPointType, DeviceType, ViewportSize } from '@app/core/interfaces/breakpoints';
import { BREAK_POINT_OPTION_TOKEN } from '@app/app.module';

export interface ResumeDialogData extends basicDialog {
  item: ResumeResumeInvitationsResumeInvitationDto;
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
    name: new FormControl(''),
    stage: new FormControl(null),
    jobName: new FormControl(null),
    status: new FormControl(null),
  });

  stageOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  writeStatusOptions: ISelectOption[] = [];

  stageTpls$ = this.store.select(CommonSelectors.selectStageList);
  stageList: ResumeShareCodesShareCodeDto[] = [];
  writeStatusTpls$ = this.store.select(CommonSelectors.selectWriteStatusList);
  writeStatusList: ResumeShareCodesShareCodeDto[] = [];

  // ---- table ----
  displayedColumns: string[] = ['select', 'name', 'mobile', 'email', 'job', 'level', 'status', 'action'];
  originalData: ResumeResumeInvitationsResumeInvitationDto[] = [];
  dataSource = new MatTableDataSource<ResumeResumeInvitationsResumeInvitationDto>([]);
  selection = new SelectionModel<ResumeResumeInvitationsResumeInvitationDto>(true, []);

  disabledDelBtn: boolean = true;

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

  requestData$;
  requestJobData$;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public snackBar: MatSnackBar,
    private dataService: DataService<ApiConfig>,
    private resumeInvitationService: ResumeInvitationService,
    private resizeService: ResizeService,
    @Inject(BREAK_POINT_OPTION_TOKEN) public breakpointOption: BreakPointType,
  ) {
    super(store, dialog);
    this.requestData$ = from(
      this.dataService.api.appResumeInvitationsList({}, {
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    ).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      takeUntil(this.destroy$)
    );
    this.requestJobData$ = from(
      this.dataService.api.appCompanyJobsGetListByCompanyIdList({
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    ).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      takeUntil(this.destroy$)
    );
    this.resizeService.onResize$.subscribe((size: ViewportSize) => {
      console.log('ViewportSize', size);
      if (size.width <= this.breakpointOption[DeviceType.Mobile]) {
        this.headerColspan = this.displayedColumns.length;
      } else {
        this.headerColspan = 1;
      }
    });
    this.store.dispatch(CommonActions.getStageList());
    this.stageTpls$.pipe(
      filter(res => !!res),
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      console.log('getStageList', list);
      this.stageList = list || [];
      this.stageOptions = list.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });

    this.store.dispatch(CommonActions.getWriteStatus());
    this.writeStatusTpls$.pipe(
      filter(res => !!res),
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      console.log('getWriteStatus', list);
      this.writeStatusList = list || [];
      this.writeStatusOptions = list.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
  }

  ngOnInit(): void {
    this.showSend$ = this.resumeInvitationService.showSend$.subscribe(value => {
      this.showSend = value;
    });
  }

  fetchResumes() {
    const httpRequest = this.requestData$.pipe(
      finalize(() => {
        httpRequest.unsubscribe();
      }),
    ).subscribe({
      next: (value) => {
        console.log('appResumeInvitationsList', value);
        this.originalData = value.data.items || [] as ResumeResumeInvitationsResumeInvitationDto[];
      },
      error: () => {},
      complete: () => {
        this.dataSource.data = [...this.originalData];
        this.updatePageInfo(this.dataSource.data.length);
      },
    });
  }

  ngAfterViewInit(): void {
    this.fetchResumes();

    const httpRequest = this.requestJobData$.pipe(
      finalize(() => {
        console.log('finalize httpRequest unsubscribe');
        httpRequest.unsubscribe();
      }),
    ).subscribe({
      next: (value) => {
        console.log('appCompanyJobsGetListByCompanyIdList', value.data);
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

  rowToggle(row: ResumeData) {
    this.selection.toggle(row);
    this.disabledDelBtn = this.selection.selected.length === 0;
  }

  addPerson(event: MouseEvent) {
    this.dialogConfig.title = '新增人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(AddPersonDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      data: {
        ...this.dialogConfig,
        item: {
          name: '',
          phone: '',
          accountCode: '',
          email: '',
          jobName: null,
          stage: null,
        } as ResumeResumeInvitationsResumeInvitationDto
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 送出新增人員請求
        // this.resumeInvitationService.createResume(result);
      }
    });
  }

  importPersons(event: MouseEvent) {
  }

  search(event: MouseEvent) {
  }

  showSendMsg(show: boolean) {
    console.log('showSendMsg', show);
    this.resumeInvitationService.updateShowSend(show);
  }

  batchEdit(event: MouseEvent) {
    this.dialogConfig.title = '批次階段編輯';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(BatchLevelEditDialogComponent, {
      height: '353px',
      width: '614px',
      maxWidth: '100%',
      data: {
        ...this.dialogConfig,
        options: this.stageOptions
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 變更被選擇的階段
        // this.selection.selected.forEach(({ id }) => this.resumeInvitationService.updateResume(id, result));
        this.selection.clear();
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
        // this.selection.selected.forEach(({ id }) => this.resumeInvitationService.deleteResume(id))
        this.selection.clear();
      }
    });
  }

  editItem(item: ResumeData) {
    this.dialogConfig.title = '編輯人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(AddPersonDialogComponent, {
      height: '833px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      panelClass: 'admin-resume-invitation-list__dialog--edit',
      data: {
        ...this.dialogConfig,
        item: item
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 送出編輯職缺請求
        const { id, ...data } = result;
        // this.resumeInvitationService.updateResume(id, data);
      }
    });
  }

  copyUrl(item: ResumeData) {
    console.log('copyUrl', item);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      ...this.configSuccess,
      data: {
        title: '連結複製成功',
        textIcon: 'check-circle',
        actionIcon: 'close-icon',
      }
    })
  }

  openAddDialog(event: MouseEvent): void {
    //
  }
}
