import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CompanyJobData } from '@app/core/datas';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { BaseComponent } from '@app/shared';
import { CompanyJobAddDialogComponent } from '@app/admin/pages/company-job-add-dialog/company-job-add-dialog.component';
import { CompanyJobEditDialogComponent } from '@app/admin/pages/company-job-edit-dialog/company-job-edit-dialog.component';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { pullAllBy } from 'lodash';
import { ResizeService } from '@app/core/services/resize.service';
import { BreakPointType, DeviceType, ViewportSize } from '@app/core/interfaces/breakpoints';
import { BREAK_POINT_OPTION_TOKEN } from '@app/app.module';

export interface CompanyJobDialogData extends basicDialog {
  item: CompanyJobData | null;
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
  originalData: CompanyJobData[] = [];
  dataSource = new MatTableDataSource<CompanyJobData>([]);
  selection = new SelectionModel<CompanyJobData>(true, []);

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

  rowToggle(row: CompanyJobData) {
    this.selection.toggle(row);
    this.disabledDelBtn = this.selection.selected.length === 0;
  }

  constructor(
    private resizeService: ResizeService,
    public dialog: MatDialog,
    @Inject(BREAK_POINT_OPTION_TOKEN) public breakpointOption: BreakPointType
    ) {
    super();
  }

  ngOnInit(): void {
    this.resizeService.onResize$.subscribe((size: ViewportSize) => {
      console.log('ViewportSize', size);
      if (size.width <= this.breakpointOption[DeviceType.Mobile]) {
        this.headerColspan = this.displayedColumns.length;
      } else {
        this.headerColspan = 0;
      }
    });

    this.originalData = Array.from(Array(20).keys()).map((val) => {
      return {
        id: val.toString(),
        jobName: '工程師' + val.toString(),
        mailTplCode: '第一階段',
        smsTplCode: '第一階段',
        creationTime: null,
        creatorId: null,
        lastModificationTime: null,
        lastModifierId: null,
        isDeleted: false,
        deleterId: null,
        deletionTime: null,
        code: null,
        companyId: null,
        jobType: null,
        jobOpening: false,
      } as CompanyJobData;
    })

    this.dataSource.data = [...this.originalData];
    this.updatePageInfo(this.dataSource.data.length);
  }

  ngAfterViewInit(): void {
    this.updatePageInfo(this.dataSource.data.length);
  }

  public updatePageInfo(length: number) {
    this.length = length;
    this.totalPage = Math.ceil(length/this.pageSize);
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
    this.disableNext = event.pageIndex === (this.totalPage -1);
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
      data: this.dialogConfig,
    });

    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出新增職缺請求
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
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
      // todo: 送出刪除職缺請求
      if (result) {
        this.originalData = pullAllBy(this.originalData, this.selection.selected, 'jobName');
        this.dataSource.data = [...this.originalData];
        this.disabledDelBtn = true;
        this.selection.clear();
      }
    });
  }

  editItem(item: CompanyJobData) {
    this.dialogConfig.title = '職缺修改';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = item;
    const dialogRef = this.dialog.open(CompanyJobEditDialogComponent, {
      width: '614px',
      panelClass: 'admin-company-job-list__dialog--edit',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯職缺請求
      if (result) {
        console.log(result);
        const editIndex = this.originalData.findIndex(d => d.id === result.id);
        if (editIndex > -1) {
          this.originalData.splice(editIndex, 1, result);
        }
        this.dataSource.data = [...this.originalData];
      }
    });
  }

}
