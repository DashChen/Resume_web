import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormErrorStateMatcher } from '@app/core';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';

@Component({
  selector: 'app-batch-level-edit-dialog',
  templateUrl: './batch-level-edit-dialog.component.html',
  styleUrls: ['./batch-level-edit-dialog.component.scss']
})
export class BatchLevelEditDialogComponent implements OnInit {
  matcher = new FormErrorStateMatcher();
  isSuccess: boolean = false;

  levelOptions: ISelectOption[] = [
    { text: '第一階段', key: '1' },
    { text: '第二階端', key: '2' }
  ];

  levelForm = new FormGroup({
    level: new FormControl('', [Validators.required])
  })

  get levelFormCtl() {
    return this.levelForm.get('level') as FormControl;
  }

  getLevelErrorMessage() {
    return this.levelFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<BatchLevelEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: basicDialog
  ) { }

  ngOnInit(): void {}

  confirm() {
    if (this.levelForm.invalid) {
      this.levelForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.levelForm.value : false);
  }
}
