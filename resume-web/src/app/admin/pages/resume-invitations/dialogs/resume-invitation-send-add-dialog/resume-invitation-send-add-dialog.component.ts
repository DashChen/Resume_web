import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ResumeData } from '@app/core/datas';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { ReceiverDialogData } from '../../components/resume-invitation-send-form/resume-invitation-send-form.component';

@Component({
  selector: 'admin-resume-invitation-send-add-dialog',
  templateUrl: './resume-invitation-send-add-dialog.component.html',
  styleUrls: ['./resume-invitation-send-add-dialog.component.scss']
})
export class ResumeInvitationSendAddDialogComponent extends BaseFormComponent implements OnInit {

  isSuccess: boolean = false;

  searchForm = new FormGroup({
    name: new FormControl(''),
    level: new FormControl(null),
  });

  levelOptions: ISelectOption[] = [];

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationSendAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiverDialogData,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    //
  }

  confirm() {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    const passData = Object.assign({}, this.data.item) as ResumeData;

    this.dialogRef.close(this.isSuccess ? passData : false);
  }

}
