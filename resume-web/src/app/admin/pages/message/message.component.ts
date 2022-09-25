import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '@app/core';
import { ApiConfig, ResumeMailQuenesMailQueneDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { Store } from '@ngrx/store';
import { Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { catchError, from, take, takeUntil, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DateTime } from 'luxon';

@Component({
  selector: 'admin-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent extends BaseComponent implements OnInit, AfterViewInit {
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
    name: new FormControl(this.initialValue.name, [Validators.pattern('[\\W]+')]),
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
  tabText2: string = '儲存信件';
  sendBtnText: string = '再次發送信件';

  tabSelected = new FormControl(0);
  tableEmptyText: string = '您還沒有發送任何信件';

  displayedColumns: string[] = ['select', 'name', 'stage', 'sendDate', 'job', 'sendSuccess', 'open', 'resume', 'action'];
  originalData: ResumeMailQuenesMailQueneDto[] | ResumeSMSTplsSMSTplDto[] = [];
  dataSource = new MatTableDataSource<ResumeMailQuenesMailQueneDto|ResumeSMSTplsSMSTplDto>([]);
  selection = new SelectionModel<ResumeMailQuenesMailQueneDto|ResumeSMSTplsSMSTplDto>(true, []);

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

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
      super(store, dialog);
      this.requestEmailData$ = (query: any = {}) => {
        return from(this.dataService.api.appMailQuenesList(query, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        }));
      }
      this.requestSmsData$ = (query: any = {}) => {
        return from(this.dataService.api.appSMSTplsList(query, {
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
  }

  ngAfterViewInit(): void {
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
  }

  getEmailData(query: any = {}) {
    this.requestEmailData$(query).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
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
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
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
    return this.nameFormCtl.hasError('pattern') ? '格式不正確，例:王大明' : '';
  }

  changeTab(index: number) {
    this.tabSelected.setValue(index);
    if (this.currentType === 'email') {
      this.searchTitle = '信件搜尋';
      this.displayedColumns = index === 0
        ? ['select', 'name', 'stage', 'sendDate', 'job', 'sendSuccess', 'open', 'resume', 'action']
        : ['select', 'name', 'stage', 'modifyDate', 'subject', 'action'];
      this.tableEmptyText = index === 0 ? '您還沒有發送任何信件' : '您還沒有儲存任何信件';
      this.sendBtnText = '再次發送信件';
      this.title = '信件管理';
      this.subtitle = index === 0 ? '已發送的信件' : '儲存信件';
    } else {
      this.searchTitle = '簡訊搜尋';
      this.displayedColumns = ['select', 'name', 'stage', 'modifyDate', 'sendSuccess', 'action'];
      this.tableEmptyText = index === 0 ? '您還沒有發送任何簡訊' : '您還沒有儲存任何簡訊';
      this.sendBtnText = '再次發送簡訊';
      this.title = '簡訊管理';
      this.subtitle = index === 0 ? '已發送的簡訊' : '儲存簡訊';
    }
    this.searchForm.reset({...this.initialValue});
  }

  search() {
    console.log(this.searchForm.value);
    let query: { [key: string]: any } = {};
    Object.keys(this.initialValue).forEach(key => {
      const val = this.searchForm.controls[key].value;
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
    console.log(query);
    if (this.currentType === 'email') {
      this.getEmailData(query);
    } else {
      this.getSmsData(query);
    }
  }

  sendMsg() {

  }
}
