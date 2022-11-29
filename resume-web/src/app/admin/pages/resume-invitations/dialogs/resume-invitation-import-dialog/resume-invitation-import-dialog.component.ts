import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService, HelperService } from '@app/core';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ApiConfig, ResumeResumeInvitationsResumeInvitationCreateDto } from '@app/core/models/Api';
import { idCardValidator, nameValidator } from '@app/core/validators';
import { BaseComponent } from '@app/shared';
import { Store } from '@ngrx/store';
import { isEqual } from 'lodash';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';

interface xlsFieldNameValid {
  key: string;
  name: string;
  valid: ValidatorFn | ValidatorFn[],
}

@Component({
  selector: 'admin-resume-invitation-import-dialog',
  templateUrl: './resume-invitation-import-dialog.component.html',
  styleUrls: ['./resume-invitation-import-dialog.component.scss']
})
export class ResumeInvitationImportDialogComponent extends BaseComponent implements OnInit {
  @ViewChild('inputFile') inputFile!: ElementRef;

  spinnerEnabled = false;
  keys: string[] | null = null;
  dataSheet = new Subject();
  isExcelFile: boolean = false;
  allowKeys: xlsFieldNameValid[] = [
    {
      key: 'name',
      name: '姓名',
      valid: [Validators.required, nameValidator()],
    },
    {
      key: 'phone',
      name: '電話',
      valid: [
        Validators.required,
        Validators.pattern(/^(\+)?[0-9]*$/g),
        Validators.minLength(9),
        Validators.maxLength(18)
      ],
    },
    {
      key: 'accountCode',
      name: '身分證號碼',
      valid: [
        Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$'),
        idCardValidator(),
      ],
    },
    {
      key: 'email',
      name: 'Email',
      valid: [
        Validators.required,
        Validators.email
      ],
    },
    {
      key: 'jobName',
      name: '職缺(代碼Guid)',
      valid: [
        Validators.required,
      ],
    },
    {
      key: 'stage',
      name: '階段(代碼)',
      valid: [
        Validators.required,
      ],
    }
  ];
  uploadData: ResumeResumeInvitationsResumeInvitationCreateDto[] = [];
  uploadFile: File | undefined;
  showFileList: boolean = false;

  constructor(
    private dataService: DataService<ApiConfig>,
    public dialogRef: MatDialogRef<ResumeInvitationImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: basicDialog,
    public override readonly store: Store,
    public override readonly dialog: MatDialog,
    private helpService: HelperService
  ) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.dataSheet.subscribe(res => {
      console.log('dataSheet', res);
      if (Array.isArray(res)) {
        // 驗證有值欄位的有效性
        const err: string[] = [];
        const testFormCtl = new FormControl(null);
        for (let i = 0; i < res.length; i++) {
          let data = res[i];
          let obj = {} as any;
          this.allowKeys.forEach((_field, index) => {
            testFormCtl.reset();
            testFormCtl.setValidators([]);
            testFormCtl.updateValueAndValidity();
            testFormCtl.setValue(data[_field.name] || '');
            testFormCtl.setValidators(_field.valid);
            testFormCtl.updateValueAndValidity();
            testFormCtl.markAsTouched();
            if (testFormCtl.invalid) {
              let errArr: string[] = [];
              if (testFormCtl.hasError('required')) {
                errArr.push('必填');
              } else {
                errArr.push('格式有誤');
              }
              err.push(String.fromCharCode(65 + index) + `${i+2}:` + errArr.join(','))
            } else {
              obj[_field.key] = data[_field.name].toString() || '';
            }
          });
          this.uploadData.push(obj);
        }

        if (err.length > 0) {
          const dialogRef = this.failDialog('資料格式有誤', err.join(';') + '; 以上欄位請填入有效資料');
          dialogRef.afterClosed().subscribe(() => {
            this.removeData();
          });
        } else {
          this.showFileList = true;
        }
      }
    });
  }

  closeDialog(isSuccess: boolean) {
    this.dialogRef.close(isSuccess ? this.uploadData : false);
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
      this.uploadFile = target.files[0];
      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);
        console.log(this.keys, data);
        if (!isEqual(this.keys, this.allowKeys.map(_key => _key.name))) {
          const dialogRef = this.failDialog('合法欄位名稱不正確', '請下載範例檔案進行資料填寫');
          dialogRef.afterClosed().subscribe(() => {
            this.removeData();
          });
        } else {
          this.dataSheet.next(data);
        }
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData() {
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;
    this.uploadData = [];
    this.showFileList = false;
  }

  downloadFile(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (this.uploadFile) {
      this.helpService.downloadFromBlob(this.uploadFile, this.uploadFile.name);
    }
  }

  downloadExample(event: MouseEvent) {
    event.stopPropagation();
  }
}
