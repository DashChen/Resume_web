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
    this.dataSource.data = [...this.dataSource.data, ...[
      { id: '1', jobName: '工程師', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
      { id: '2', jobName: '工程師１', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
      { id: '3', jobName: '工程師２', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
      { id: '4', jobName: '工程師３', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
      { id: '5', jobName: '工程師４', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
      { id: '6', jobName: '工程師５', mailTplCode: '第一階段', smsTplCode: '第一階段',creationTime: null, creatorId: null, lastModificationTime: null, lastModifierId: null, isDeleted: false, deleterId: null, deletionTime: null, code: null, companyId: null, jobType: null, jobOpening: false },
    ]];
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
