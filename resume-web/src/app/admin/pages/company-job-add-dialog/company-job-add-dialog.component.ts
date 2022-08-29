import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CompanyJobAddDialogData } from '@app/admin/pages/company-job-list/company-job-list.component';

@Component({
  selector: 'admin-company-job-add-dialog',
  templateUrl: './company-job-add-dialog.component.html',
  styleUrls: ['./company-job-add-dialog.component.scss']
})
export class CompanyJobAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompanyJobAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompanyJobAddDialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
