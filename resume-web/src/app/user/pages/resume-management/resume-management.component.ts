import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ResumeData } from '@app/core/datas';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { AddPersonDialogComponent } from '@app/shared/dialog/add-person-dialog/add-person-dialog.component';
import { BatchLevelEditDialogComponent } from '@app/shared/dialog/batch-level-edit-dialog/batch-level-edit-dialog.component';
import { MessageSnackbarComponent } from '@app/shared/snackbar/message-snackbar/message-snackbar.component';

@Component({
  selector: 'app-resume-management',
  templateUrl: './resume-management.component.html',
  styleUrls: ['./resume-management.component.scss']
})
export class ResumeManagementComponent extends BaseComponent implements OnInit {
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
  disabledDelBtn: boolean = true;

  displayedColumns: string[] = ['select', 'name', 'mobile', 'email', 'job', 'level', 'status', 'action'];
  dataSource = new MatTableDataSource<ResumeData>([]);
  selection = new SelectionModel<ResumeData>(true, []);

  configSuccess: MatSnackBarConfig = {
    panelClass: 'success-snackbar',
    duration: 100000,
    // horizontalPosition: 'left',
    // verticalPosition: 'bottom'
  };

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

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) {
    super();
  }

  ngOnInit(): void {
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

  addReceiver() {
    
  }

  cancelSend() {

  }

  sendMessage() {

  }
}
