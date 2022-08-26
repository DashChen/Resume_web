import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ResumeData } from '@app/core/datas';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';

@Component({
  selector: 'app-resume-management',
  templateUrl: './resume-management.component.html',
  styleUrls: ['./resume-management.component.scss']
})
export class ResumeManagementComponent extends BaseComponent implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl(''),
    level: new FormControl(null),
    job: new FormControl(null),
    status: new FormControl(null),
  });

  levelOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  statusOptions: ISelectOption[] = [];

  displayedColumns: string[] = ['name', 'mobile', 'email', 'job_name', 'level', 'status'];
  dataSource = new MatTableDataSource<ResumeData>([]);
  selection = new SelectionModel<ResumeData>(true, []);

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

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  addPerson(event: MouseEvent) {

  }

  importPersons(event: MouseEvent) {
    
  }

  search(event: MouseEvent) {
    
  }
}
