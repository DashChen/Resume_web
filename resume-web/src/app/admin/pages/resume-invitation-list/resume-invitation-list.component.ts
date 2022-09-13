import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { ResumeData } from '@app/core/datas';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { AddPersonDialogComponent } from '@app/shared/dialog/add-person-dialog/add-person-dialog.component';
import { BatchLevelEditDialogComponent } from '@app/shared/dialog/batch-level-edit-dialog/batch-level-edit-dialog.component';
import { MessageSnackbarComponent } from '@app/shared/snackbar/message-snackbar/message-snackbar.component';
import { ResumeInvitationService } from '../';

export interface ResumeDialogData extends basicDialog {
  item: ResumeData | null;
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
  showSendSubscription!: Subscription;

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
  originalData: ResumeData[] = [];
  dataSource = new MatTableDataSource<ResumeData>([]);
  selection = new SelectionModel<ResumeData>(true, []);

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

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private resumeInvitationService: ResumeInvitationService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.updatePageInfo(this.dataSource.data.length);

    this.showSendSubscription = this.resumeInvitationService.getShowSend().subscribe(value => {
      this.showSend = value;
    });

    this.originalData = Array.from(Array(20).keys()).map((val) => {
      return {
        // id: val.toString(),
        // creationTime: "2022-09-13T15:31:53.069Z",
        // creatorId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // lastModificationTime: "2022-09-13T15:31:53.069Z",
        // lastModifierId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // isDeleted: true,
        // deleterId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // deletionTime: "2022-09-13T15:31:53.069Z",
        // code: "string",
        // companyName: "string",
        // jobName: "行銷小編",
        // sendType: "string",
        // sendStatus: "string",
        // isOpening: true,
        // dateA: "2022-09-13T15:31:53.069Z",
        // dateD: "2022-09-13T15:31:53.069Z",
        // validCode: "string",
        // accountCode: "string",
        // stage: "1",
        // resumeCode: "string",
        // phone: "0912123456",
        // email: "da-ming.wa@gmail.com",
        // companyId: "string",
        // url: "string"

        id: val.toString(),
        name: '工程師' + val.toString(),
        identityId: 'A123456789',
        mobile: '0912123456',
        email: 'da-ming.wa@gmail.com',
        job: 'sm',
        level: '1',
      } as ResumeData;
    })

    this.dataSource.data = [...this.originalData];
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.showSendSubscription.unsubscribe();
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
    this.dialogConfig.item = null;
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
    this.resumeInvitationService.setShowSend(show);
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
    this.dialogConfig.title = '職缺修改';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = item;
    const dialogRef = this.dialog.open(AddPersonDialogComponent, {
      width: '614px',
      panelClass: 'admin-resume-invitation-list__dialog--edit',
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
