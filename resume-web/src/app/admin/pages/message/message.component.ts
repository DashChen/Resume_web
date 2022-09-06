import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';

@Component({
  selector: 'admin-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent extends BaseComponent implements OnInit {
  title: string = '信件管理';
  subtitle: string = '已發送的信件';

  searchForm = new FormGroup({
  });

  isSms: boolean = false;

  tabText1: string = '已發送的信件';
  tabText2: string = '儲存信件';

  tabSelected = new FormControl(0);

  displayedColumns: string[] = ['select', 'name', 'mobile', 'email', 'job', 'level', 'status', 'action'];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
      super();
    }

  ngOnInit(): void {
  }

  changeTab(index: number) {
    this.tabSelected.setValue(index);
  }

  search(event: MouseEvent) {

  }

  sendMsg(event: MouseEvent) {

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
}
