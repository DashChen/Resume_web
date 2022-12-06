import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { omitBy } from 'lodash';
import { DateTime } from 'luxon';
import { catchError, from, take, takeUntil, throwError } from 'rxjs';
import { DataService, ResizeService } from '@app/core';
import { ApiConfig, ResumeMailQuenesMailQueneDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { Actions as RouterActions, Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { MessagePreviewDialogComponent } from '@app/admin/pages';
import { BREAK_POINT_OPTION_TOKEN } from '@app/app.module';
import { BreakPointType, ViewportSize, DeviceType } from '@app/core/interfaces/breakpoints';
import { MessageSearchDialogComponent } from './dialogs/message-search-dialog/message-search-dialog.component';

export interface MessageSearchDialogData extends basicDialog {
  type: string;
  tabSelected: number;
}

export interface MessagePreviewDialogData extends basicDialog {
  type: string;
  subject: string;
  body: string;
}

@Component({
  selector: 'admin-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined;

  title: string = '信件管理';
  subtitle: string = '已發送的信件';
  currentType: string = 'email';
  initialValue = {
    sendDate: null,
    sendStatus: null,
    openStatus: null,
    stage: null,
    name: '',
  }
  requestKeyMap: { [key: string]: string } = {
    sendStatus: 'Success',
    openStatus: 'IsOpened',
    stage: 'Stage',
    name: 'To_Name',
  }
  searchForm = new FormGroup({
    sendDate: new FormControl(this.initialValue.sendDate),
    sendStatus: new FormControl(this.initialValue.sendStatus),
    openStatus: new FormControl(this.initialValue.openStatus),
    stage: new FormControl(this.initialValue.stage),
    name: new FormControl(this.initialValue.name, [Validators.pattern('^[A-Za-z0-9\u4E00-\u9FFF]+')]),
  });

  get nameFormCtl() {
    return this.searchForm.get('name') as FormControl;
  }

  sendStatusOptions: ISelectOption[] = [
    { text: '是', key: true },
    { text: '否', key: false },
  ];
  openStatusOptions: ISelectOption[] = [
    { text: '是', key: true },
    { text: '否', key: false },
  ];
  stageOptions: ISelectOption[] = [];
  stageList: ResumeShareCodesShareCodeDto[] = [];

  isSms: boolean = false;

  searchTitle: string = '信件搜尋';
  tabText1: string = '已發送的信件';
  tabText2: string = '儲存的信件';
  sendBtnText: string = '再次發送信件';

  tabSelected = new FormControl(0);
  tableEmptyText: string = '您還沒有發送任何信件';

  displayedColumns: string[] = ['select', 'name', 'stage', 'sendDate', 'job', 'sendSuccess', 'open', 'resume', 'action'];
  originalData: ResumeMailQuenesMailQueneDto[] | ResumeSMSTplsSMSTplDto[] = [];
  dataSource = new MatTableDataSource<ResumeMailQuenesMailQueneDto|ResumeSMSTplsSMSTplDto>([]);
  selection = new SelectionModel<ResumeMailQuenesMailQueneDto|ResumeSMSTplsSMSTplDto>(true, []);
  disabledSend: boolean = true;

  //
  headerColspan: number = 1;

  // ---- paginator ----.
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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

  rowToggle(row: ResumeMailQuenesMailQueneDto) {
    this.selection.toggle(row);
  }

  requestEmailData$;
  requestSmsData$;
  isSP: boolean = false;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    private resizeService: ResizeService,
    @Inject(BREAK_POINT_OPTION_TOKEN) public breakpointOption: BreakPointType
  ) {
      super(store, dialog);
      this.requestEmailData$ = (query: any = {}) => {
        return from(this.dataService.api.appMailQuenesList(query, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        }));
      }
      this.requestSmsData$ = (query: any = {}) => {
        return from(this.dataService.api.appSMSQuenesList(query, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        }));
      }
    }

  ngOnInit(): void {
    // 取回人員階段
    this.store.dispatch(CommonActions.getStageList());
    this.store.select(CommonSelectors.selectStageList).subscribe(res => {
      this.stageList = res;
      this.stageOptions = res.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
    this.store.select(RouterSelectors.selectCurrentParams).subscribe(res => {
      console.log('selectCurrentParams', res);
      this.currentType = res['type'];
      this.changeTab(0);
      if (this.currentType === 'email') {
        this.getEmailData();
      } else {
        this.getSmsData();
      }
    });
    this.resizeService.onResize$.subscribe((size: ViewportSize) => {
      console.log('ViewportSize', size, this.breakpointOption[DeviceType.Mobile]);
      if (size.width <= this.breakpointOption[DeviceType.Mobile]) {
        this.headerColspan = this.displayedColumns.length;
        this.isSP = true;
      } else {
        this.headerColspan = 1;
        this.isSP = false;
      }
    });
    this.dataSource.sortData = this.sortData();
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  sortData() {
    let sortFunction =
      (items: ResumeMailQuenesMailQueneDto[] | ResumeSMSTplsSMSTplDto[], sort: MatSort): ResumeMailQuenesMailQueneDto[] | ResumeSMSTplsSMSTplDto[] =>  {
        console.log('sortData', sort);
        if (!sort.active || sort.direction === '') {
          return items;
        }
        return items.sort((a: ResumeMailQuenesMailQueneDto | ResumeSMSTplsSMSTplDto, b: ResumeMailQuenesMailQueneDto | ResumeSMSTplsSMSTplDto) => {
          let comparatorResult = 0;
          let aText, bText;
          switch (sort.active) {
            case 'name':
              if ('to_Name' in a && 'to_Name' in b) {
                if (a.to_Name && b.to_Name) {
                  comparatorResult = a.to_Name.localeCompare(b.to_Name);
                }
              } else if ('name' in a && 'name' in b) {
                if (a.name && b.name) {
                  comparatorResult = a.name.localeCompare(b.name);
                }
              }
              break;
            case 'stage':
              if ('stage' in a && 'stage' in b) {
                aText = this.stageList.find(_stage => _stage.code === a.stage)?.name;
                bText = this.stageList.find(_stage => _stage.code === b.stage)?.name;
                if (aText && bText) {
                  comparatorResult = aText.localeCompare(bText);
                } else if (!aText) {
                  comparatorResult = -1;
                } else if (!bText) {
                  comparatorResult = 1;
                }
              }
              break;
            case 'sendDate':
            case 'modifyDate':
              if ('send_Date' in a && 'send_Date' in b) {
                if (a.send_Date && b.send_Date) {
                  comparatorResult = DateTime.fromISO(a.send_Date).valueOf() - DateTime.fromISO(b.send_Date).valueOf();
                } else if (!a.send_Date) {
                  comparatorResult = -1;
                } else if (!b.send_Date) {
                  comparatorResult = 1;
                }
              }
              if ('lastModificationTime' in a && 'lastModificationTime' in b) {
                if (a.lastModificationTime && b.lastModificationTime) {
                  comparatorResult = DateTime.fromISO(a.lastModificationTime).valueOf() - DateTime.fromISO(b.lastModificationTime).valueOf();
                } else if (!a.lastModificationTime) {
                  comparatorResult = -1;
                } else if (!b.lastModificationTime) {
                  comparatorResult = 1;
                }
              }
              break;
            case 'job':
              if ('jobName' in a && 'jobName' in b) {
                if (a.jobName && b.jobName) {
                  comparatorResult = a.jobName.localeCompare(b.jobName);
                } else if (!a.jobName) {
                  comparatorResult = -1;
                } else if (!b.jobName) {
                  comparatorResult = 1;
                }
              }
              break;
            case 'sendSuccess':
            case 'open':
              if ('success' in a && 'success' in b) {
                comparatorResult = (a.success === b.success)? 0 : (a.success ? -1 : 1);
              }
              if ('isOpened' in a && 'isOpened' in b) {
                comparatorResult = (a.isOpened === b.isOpened)? 0 : (a.isOpened ? -1 : 1);
              }
              break;
            case 'subject':
              if ('subject' in a && 'subject' in b) {
                if (a.subject && b.subject) {
                  comparatorResult = a.subject.localeCompare(b.subject);
                } else if (!a.subject) {
                  comparatorResult = -1;
                } else if (!b.subject) {
                  comparatorResult = 1;
                }
              }
              break;
          }
          return comparatorResult * (sort.direction == 'asc' ? 1 : -1);
        });
      };
    return sortFunction;
  }

  getEmailData(query: any = {}) {
    this.requestEmailData$(query).pipe(
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
      take(1),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        console.log('getEmailData', res);
        this.originalData = res.data.items || [] as ResumeMailQuenesMailQueneDto[];
      },
      error: (err) => { console.error('appMailQuenesList', err); },
      complete: () => {
        this.dataSource.data = [...this.originalData];
        this.updatePageInfo(this.dataSource.data.length);
      }
    });
  }

  getSmsData(query: any = {}) {
    this.requestSmsData$(query).pipe(
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
      take(1),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        console.log('getSmsData', res);
        this.originalData = res.data.items || [] as ResumeSMSTplsSMSTplDto[];
      },
      error: (err) => { console.error('appSMSTplsList', err); },
      complete: () => {
        this.dataSource.data = [...this.originalData];
        this.updatePageInfo(this.dataSource.data.length);
      }
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

  getNameErrorMessage() {
    return this.nameFormCtl.hasError('pattern') ? '格式不正確，請輸入文字' : '';
  }

  changeTab(index: number) {
    this.tabSelected.setValue(index);
    if (this.currentType === 'email') {
      this.searchTitle = '信件搜尋';
      this.displayedColumns = index === 0
        ? ['select', 'name', 'stage', 'sendDate', 'job', 'sendSuccess', 'open', 'resume', 'action']
        : ['select', 'name', 'stage', 'sendDate', 'modifyDate', 'subject', 'action'];
      this.tableEmptyText = index === 0 ? '您還沒有發送任何信件' : '您還沒有儲存任何信件';
      this.sendBtnText = '再次發送信件';
      this.title = '信件管理';
      this.subtitle = index === 0 ? '已發送的信件' : '儲存信件';
      this.tabText1 = '已發送的信件';
      this.tabText2 = '發送信件';
    } else {
      this.searchTitle = '簡訊搜尋';
      this.displayedColumns = ['select', 'name', 'stage', 'sendDate', 'modifyDate', 'sendSuccess', 'action'];
      this.tableEmptyText = index === 0 ? '您還沒有發送任何簡訊' : '您還沒有儲存任何簡訊';
      this.sendBtnText = '再次發送簡訊';
      this.title = '簡訊管理';
      this.subtitle = index === 0 ? '已發送的簡訊' : '儲存簡訊';
      this.tabText1 = '已發送的簡訊';
      this.tabText2 = '發送簡訊';
    }
    this.searchForm.reset({...this.initialValue});
    this.headerColspan = this.isSP ? this.displayedColumns.length : 1;
    this.search();
  }

  search() {
    if (this.searchForm.invalid) {
      console.log('search invalid', this.searchForm);
      return;
    }

    console.log(this.searchForm.value);
    let query: { [key: string]: any } = {};
    Object.keys(this.initialValue).forEach(key => {
      const val = this.searchForm.controls[key].value;
      if (val !== null && val !== '') {
        if (key === 'sendDate') {
          console.log(typeof val, val);
          let A = 'Send_DateMin', B = 'Send_DateMax';
          if (this.currentType === 'email') {
            A = this.tabSelected.value === 1 ? 'DateAMin' : A;
            B = this.tabSelected.value === 1 ? 'DateAMax' : B;
          } else {

          }
          query[A] = DateTime.fromMillis(val.ts).startOf('day').toISO();
          query[B] = DateTime.fromMillis(val.ts).endOf('day').toISO();
        } else {
          query[this.requestKeyMap[key]] = val;
        }
      }
    })
    query = omitBy(query, v => v === null || v === '');
    console.log(query);
    if (this.currentType === 'email') {
      this.getEmailData(query);
    } else {
      this.getSmsData(query);
    }
  }

  sendMsg() {
    if (this.selection.selected.length === 0) {
      return false;
    }
    this.showSuccessDialog();
    this.selection.clear();
    return true;
  }

  showSuccessDialog() {
    if (this.currentType === 'email') {
      this.successDialog('發送信件', '您的信件已發送！', '確定');
    } else {
      this.successDialog('發送簡訊', '您的簡訊已發送！', '確定');
    }
  }

  showResume(event: MouseEvent, item: ResumeMailQuenesMailQueneDto) {
    event.stopPropagation();
    event.preventDefault();

    if (item.resumeCode) {
      this.store.dispatch(CommonActions.setResumeCode({
        payload: item.resumeCode
      }));
      this.store.dispatch(RouterActions.Go({ path: ['admin', 'resume-management-preview']}));
    }
  }

  previewMessage(item: ResumeMailQuenesMailQueneDto|ResumeSMSTplsSMSTplDto) {
    this.dialogConfig.title = (this.currentType === 'email' ? '信件': '簡訊' ) + '預覽';
    this.dialogConfig.successBtnText = '再次發送' + (this.currentType === 'email' ? '信件': '簡訊' );
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(MessagePreviewDialogComponent, {
      width: '614px',
      height: '651px',
      panelClass: 'admin-message__dialog--preview',
      data: {
        ...this.dialogConfig,
        type: this.currentType,
        subject: item.subject,
        body: item.body,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.showSuccessDialog();
      }
    });
  }

  searchMessage() {
    this.dialogConfig.title = (this.currentType === 'email' ? '信件': '簡訊' ) + '搜尋';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(MessageSearchDialogComponent, {
      width: 'calc(100vw - 48px)',
      maxWidth: '100%',
      height: '726px',
      maxHeight: '80vh',
      panelClass: 'admin-message__dialog--search',
      data: {
        ...this.dialogConfig,
        type: this.currentType,
        tabSelected: this.tabSelected.value
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // TODO 搜尋
        let query: { [key: string]: any } = {};
        Object.keys(result).forEach(key => {
          const val = result[key];
          if (val !== null && val !== '') {
            if (key === 'sendDate') {
              console.log(typeof val, val);
              query['Send_DateMin'] = DateTime.fromMillis(val.ts).startOf('day').toFormat('yyyy/MM/dd HH:mm:ss');
              query['Send_DateMax'] = DateTime.fromMillis(val.ts).endOf('day').toFormat('yyyy/MM/dd HH:mm:ss');
            } else {
              query[this.requestKeyMap[key]] = val;
            }
          }
        })
        query = omitBy(query, v => v == null || v == '');
        console.log(query);
        if (this.currentType === 'email') {
          this.getEmailData(query);
        } else {
          this.getSmsData(query);
        }
      }
    });
  }
}