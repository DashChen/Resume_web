import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { CompanyJobData } from '@app/core/datas';

@Component({
  selector: 'admin-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.scss']
})
export class CompanyJobListComponent implements OnInit {
 
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

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: MouseEvent) {
    console.log('addItem');
  }
  
  delItems(event: MouseEvent) {
    console.log('delItems');
  }

  editItem(item: CompanyJobData) {
    console.log('editItem', item);
  }

}
