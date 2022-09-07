import { SelectionModel } from '@angular/cdk/collections';

import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { ResumeData } from '@app/core/datas';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { AddPersonDialogComponent } from '@app/shared/dialog/add-person-dialog/add-person-dialog.component';
import { BatchLevelEditDialogComponent } from '@app/shared/dialog/batch-level-edit-dialog/batch-level-edit-dialog.component';
import { MessageSnackbarComponent } from '@app/shared/snackbar/message-snackbar/message-snackbar.component';

@Component({
  selector: 'admin-resume-invitation-list',
  templateUrl: './resume-invitation-list.component.html',
  styleUrls: ['./resume-invitation-list.component.scss']
})
export class ResumeInvitationListComponent extends BaseComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showSend: boolean = false;

  searchForm = new FormGroup({
    name: new FormControl(''),
    level: new FormControl(null),
    job: new FormControl(null),
    status: new FormControl(null),
  });

  levelOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  statusOptions: ISelectOption[] = [];

  // ---- table ----
  displayedColumns: string[] = ['select', 'name', 'mobile', 'email', 'job', 'level', 'status', 'action'];
  dataSource = new MatTableDataSource<ResumeData>([]);
  selection = new SelectionModel<ResumeData>(true, []);

  disabledDelBtn: boolean = true;

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

  constructor(
    public dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {

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
      height: '783px',
      width: '614px',
      maxWidth: '100%',
      maxHeight: '85vh',
      data: this.dialogConfig
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 送出新增人員請求
        this.dataSource.data.push(result);
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  importPersons(event: MouseEvent) {
  }

  search(event: MouseEvent) {
  }

  showSendMsg(show: boolean) {
    console.log('showSendMsg', show);
    this.showSend = show;
  }

  batchEdit(event: MouseEvent) {
    this.dialogConfig.title = '批次階段編輯';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(BatchLevelEditDialogComponent, {
      height: '353px',
      width: '614px',
      maxWidth: '100%',
      data: this.dialogConfig
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 變更被選擇的階段
      }
    });
  }

  delItems(event: MouseEvent) {
  }

  editItem(item: ResumeData) {
    console.log('editItem', item);
  }

  openAddDialog(event: MouseEvent): void {
    ///
  }

}
