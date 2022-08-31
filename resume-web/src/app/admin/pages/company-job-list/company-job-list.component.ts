import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CompanyJobData } from '@app/core/datas';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { BaseComponent } from '@app/shared';
import { CompanyJobAddDialogComponent } from '@app/admin/pages/company-job-add-dialog/company-job-add-dialog.component';
import { CompanyJobDeleteDialogComponent } from '@app/admin/pages/company-job-delete-dialog/company-job-delete-dialog.component';
import { CompanyJobEditDialogComponent } from '@app/admin/pages/company-job-edit-dialog/company-job-edit-dialog.component';
export interface CompanyJobDialogData extends basicDialog {
  item: CompanyJobData | null;
}
@Component({
  selector: 'admin-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.scss']
})
export class CompanyJobListComponent extends BaseComponent implements OnInit {

  override dialogConfig: CompanyJobDialogData = {} as CompanyJobDialogData;
  disabledDelBtn: boolean = false;

  displayedColumns: string[] = ['select', 'jobName', 'mailTplCode', 'smsTplCode', 'action'];
  dataSource = new MatTableDataSource<CompanyJobData>([]);
  selection = new SelectionModel<CompanyJobData>(true, []);

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

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  openAddDialog(event: MouseEvent): void {
    this.dialogConfig.title = '新增職缺';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    this.dialogConfig.item = null;
    const dialogRef = this.dialog.open(CompanyJobAddDialogComponent, {
      width: '614px',
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
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(CompanyJobDeleteDialogComponent, {
      width: '614px',
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出刪除職缺請求
      if (result) {
        this.selection.selected.forEach(s => {
          this.dataSource.data = this.dataSource.data.filter(d => d.jobName !== s.jobName);
        });
        this.disabledDelBtn = true;
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
      data: this.dialogConfig,
    });
    dialogRef.afterClosed().subscribe(result => {
      // todo: 送出編輯職缺請求
      if (result) {
        console.log(result);
      }
    });
  }

}
