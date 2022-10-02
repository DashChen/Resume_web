import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ApiConfig } from '@app/core/models/Api';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'admin-resume-invitation-import-dialog',
  templateUrl: './resume-invitation-import-dialog.component.html',
  styleUrls: ['./resume-invitation-import-dialog.component.scss']
})
export class ResumeInvitationImportDialogComponent implements OnInit {
  @ViewChild('inputFile') inputFile!: ElementRef;

  isSuccess: boolean = false;
  spinnerEnabled = false;
  keys: string[] | null = null;
  dataSheet = new Subject();
  isExcelFile: boolean = false;

  constructor(
    private dataService: DataService<ApiConfig>,
    public dialogRef: MatDialogRef<ResumeInvitationImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: basicDialog,
  ) { }

  ngOnInit(): void {
    this.dataSheet.subscribe(res => {
      console.log('dataSheet', res);
    })
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? true : false);
  }

  onChange(evt: any) {
    let data: any, header;
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length === 0) {
      return;
    }
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx|.csv)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    console.log(this.isExcelFile);
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);
        console.log(this.keys, data);
        this.dataSheet.next(data);
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData() {
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;
  }
}
