import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CompanyJobData } from '@app/core/datas';
import { CompanyJobAddDialogComponent } from '@app/admin/pages/company-job-add-dialog/company-job-add-dialog.component';
export interface CompanyJobAddDialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'admin-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.scss']
})
export class CompanyJobListComponent implements OnInit {
 
  animal: string = '';
  name: string = '';

  disabledDelBtn: boolean = true;

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  showAddDialog(event: MouseEvent): void {
    const dialogRef = this.dialog.open(CompanyJobAddDialogComponent, {
      width: '614px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
  delItems(event: MouseEvent) {
    console.log('delItems');
  }

  editItem(item: CompanyJobData) {
    console.log('editItem', item);
  }

}
