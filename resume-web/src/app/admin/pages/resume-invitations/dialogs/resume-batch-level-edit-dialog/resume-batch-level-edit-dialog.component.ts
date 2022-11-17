import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormErrorStateMatcher } from '@app/core';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';

export interface batchStageDialogData extends basicDialog {
  options: ISelectOption[];
}

@Component({
  selector: 'admin-resume-batch-level-edit-dialog',
  templateUrl: './resume-batch-level-edit-dialog.component.html',
  styleUrls: ['./resume-batch-level-edit-dialog.component.scss']
})
export class ResumeBatchLevelEditDialogComponent implements OnInit {
  matcher = new FormErrorStateMatcher();
  isSuccess: boolean = false;

  stageOptions: ISelectOption[] = [];

  stageForm = new FormGroup({
    stage: new FormControl('', [Validators.required])
  })

  get stageFormCtl() {
    return this.stageForm.get('stage') as FormControl;
  }

  getStageErrorMessage() {
    return this.stageFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<ResumeBatchLevelEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: batchStageDialogData
  ) {
    this.stageOptions = data.options;
  }

  ngOnInit(): void {}

  confirm() {
    if (this.stageForm.invalid) {
      this.stageForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.stageForm.value : false);
  }
}
