import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { BaseComponent } from '@app/shared';
import { CompanyJobAddDialogComponent } from '@app/admin/pages/company-job-list/dialogs/company-job-add-dialog/company-job-add-dialog.component';
import { CompanyJobEditDialogComponent } from '@app/admin/pages/company-job-list/dialogs/company-job-edit-dialog/company-job-edit-dialog.component';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { pullAllBy } from 'lodash';
import { ResizeService } from '@app/core/services/resize.service';
import { BreakPointType, DeviceType, ViewportSize } from '@app/core/interfaces/breakpoints';
import { BREAK_POINT_OPTION_TOKEN } from '@app/app.module';
import { Store } from '@ngrx/store';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { Actions as AdminActions, Selectors as AdminSelectors } from '@app/shared/store/admin';
import { ApiConfig, ResumeCompanyJobsCompanyJobDto, ResumeMailTplsMailTplDto, ResumeSMSTplsSMSTplDto } from '@app/core/models/Api';
import { catchError, from, Observable, throwError } from 'rxjs';
import { DataService } from '@app/core';
import { HttpErrorResponse } from '@angular/common/http';
import { validateBasis } from '@angular/flex-layout';

export interface CompanyJobDialogData extends basicDialog {
  item: ResumeCompanyJobsCompanyJobDto | null;
  mailList: ResumeMailTplsMailTplDto[];
  smsList: ResumeSMSTplsSMSTplDto[];
}
@Component({
  selector: 'admin-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.scss']
})
export class CompanyJobListComponent extends BaseComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  override dialogConfig: CompanyJobDialogData = {} as CompanyJobDialogData;
  disabledDelBtn: boolean = true;

  keyword: string = '';

  displayedColumns: string[] = ['select', 'jobName', 'mailTplCode', 'smsTplCode', 'action'];
  originalData: ResumeCompanyJobsCompanyJobDto[] = [];
  dataSource = new MatTableDataSource<ResumeCompanyJobsCompanyJobDto>([]);
  selection = new SelectionModel<ResumeCompanyJobsCompanyJobDto>(true, []);

  // 信件樣板
  mailTpls$ = this.store.select(CommonSelectors.selectMailTpls);
  mailList: ResumeMailTplsMailTplDto[] = [];
  // 簡訊樣板
  smsTpls$ = this.store.select(CommonSelectors.selectSmsTpls);
  smsList: ResumeSMSTplsSMSTplDto[] = [];

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
      this.disabledDelBtn = this.selection.selected.length === 0;
      return;
    }
    this.selection.select(...this.dataSource.data);
    this.disabledDelBtn = this.selection.selected.length === 0;
  }

  rowToggle(row: ResumeCompanyJobsCompanyJobDto) {
    this.selection.toggle(row);
    this.disabledDelBtn = this.selection.selected.length === 0;
  }

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    private dataService: DataService<ApiConfig>,
    private resizeService: ResizeService,
    @Inject(BREAK_POINT_OPTION_TOKEN) public breakpointOption: BreakPointType
  ) {
    super(store, dialog);
  }

  ngOnInit(): void {
    // 取回信件樣板、簡訊樣板
    this.store.dispatch(CommonActions.getSmsTpl());
    this.store.dispatch(CommonActions.getMailTpl());
    this.mailTpls$.subscribe(list => {
      this.mailList = list || [];
    });
    this.smsTpls$.subscribe(list => {
      this.smsList = list || [];
    });
    this.resizeService.onResize$.subscribe((size: ViewportSize) => {
      console.log('ViewportSize', size);
      if (size.width <= this.breakpointOption[DeviceType.Mobile]) {
        this.headerColspan = this.displayedColumns.length;
      } else {
        this.headerColspan = 0;
      }
    });
  }

  ngAfterViewInit(): void {
    from(
      this.dataService.api.appCompanyJobsList({}, {
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    ).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
    ).subscribe({
      next: (value) => {
        console.log('appCompanyJobsList', value);
        this.originalData = value.data.items || [] as ResumeCompanyJobsCompanyJobDto[];
      },
      error: () => {
        this.originalData = Array.from(Array(20).keys()).map((val) => {
          return {
            id: val.toString(),
            code: null,
            companyId: null,
            jobName: null,
            jobType: null,
            mailTplCode: '第一階段',
            smsTplCode: '第一階段'
          } as ResumeCompanyJobsCompanyJobDto;
        })
      },
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

  searchKeyword(event: any) {
    console.log('serarch keyword', event);
    const data = this.originalData.filter((item) => item.jobName?.includes(event));
    this.dataSource.data = data;
    this.updatePageInfo(this.dataSource.data.length);
    this.clearManualPage();
  }

  openAddDialog(event: MouseEvent): void {
    this.dialogConfig.title = '新增職缺';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = null;
    const dialogRef = this.dialog.open(CompanyJobAddDialogComponent, {
      width: '614px',
      panelClass: 'admin-company-job-list__dialog--add',
      data: {
        ...this.dialogConfig,
        smsList: this.smsList,
        mailList: this.mailList,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出新增職缺請求
      if (result) {
        from(
          this.dataService.api.appCompanyJobsCreate(result, {
            headers: {
              ...this.dataService.getAuthorizationToken('admin')
            }
          })
        ).pipe(
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
          }),
        ).subscribe({
          next: (value) => {
            console.log('appCompanyJobsCreate', value);
            this.dataSource.data = [...this.dataSource.data, value.data];
          },
          error: (err: Error) => {
            this.failDialog('新增失敗', err.message, '知道了');
          },
          complete: () => {
            this.updatePageInfo(this.dataSource.data.length);
          }
        });
      }
    });
  }

  delItems(event: MouseEvent) {
    this.dialogConfig.title = '刪除職缺項目';
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
      const idList = this.selection.selected.filter(d => !!d.id).map(d => d.id?.toString()) as string[];
      // todo: 送出刪除職缺請求
      if (result && idList.length > 0) {
        console.log('delItems', result);
        from(
          this.dataService.api.appCompanyJobsDeleteListDelete({
            idList: idList
          }, {
            headers: {
              ...this.dataService.getAuthorizationToken('admin')
            }
          })
        ).pipe(
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
          }),
        ).subscribe({
          next: (value) => {
            console.log('appCompanyJobsDeleteListDelete', value);
            this.originalData = pullAllBy(this.originalData, this.selection.selected, 'jobName');
            this.dataSource.data = [...this.originalData];
          },
          error: (err: Error) => {
            this.failDialog('刪除失敗', err.message);
          },
          complete: () => {
            this.disabledDelBtn = true;
            this.selection.clear();
            this.updatePageInfo(this.dataSource.data.length);
          }
        });
      }
    });
  }

  editItem(item: ResumeCompanyJobsCompanyJobDto) {
    this.dialogConfig.title = '職缺修改';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = item;
    const dialogRef = this.dialog.open(CompanyJobEditDialogComponent, {
      width: '614px',
      panelClass: 'admin-company-job-list__dialog--edit',
      data: {
        ...this.dialogConfig,
        smsList: this.smsList,
        mailList: this.mailList,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯職缺請求
      if (result && item?.id) {
        console.log('editItem', result);
        from(
          this.dataService.api.appCompanyJobsUpdate(item.id, result, {
            headers: {
              ...this.dataService.getAuthorizationToken('admin')
            }
          })
        ).pipe(
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
          }),
        ).subscribe({
          next: (value) => {
            console.log('appCompanyJobsUpdate', value, item);
            const editIndex = this.originalData.findIndex(d => d.id === item.id);
            if (editIndex > -1) {
              this.originalData.splice(editIndex, 1, value.data);
            }
          },
          error: (err: Error) => {
            this.failDialog('變更失敗', err.message);
          },
          complete: () => {
            this.dataSource.data = [...this.originalData];
          }
        });
      }
    });
  }

}
