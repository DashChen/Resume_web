import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CompanyJobDialogData } from '@app/admin/pages/company-job-list/company-job-list.component';

@Component({
  selector: 'app-company-job-delete-dialog',
  templateUrl: './company-job-delete-dialog.component.html',
  styleUrls: ['./company-job-delete-dialog.component.scss']
})
export class CompanyJobDeleteDialogComponent implements OnInit {

  isSuccess: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CompanyJobDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompanyJobDialogData,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? true : false);
  }

}
