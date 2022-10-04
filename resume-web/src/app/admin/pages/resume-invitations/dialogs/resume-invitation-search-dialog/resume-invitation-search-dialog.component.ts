import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { ResumeSearchDialogData } from '../../components/resume-invitation-list/resume-invitation-list.component';

@Component({
  selector: 'admin-resume-invitation-search-dialog',
  templateUrl: './resume-invitation-search-dialog.component.html',
  styleUrls: ['./resume-invitation-search-dialog.component.scss']
})
export class ResumeInvitationSearchDialogComponent extends BaseFormComponent {

  searchForm = new FormGroup({
    Name: new FormControl(''),
    Stage: new FormControl(null),
    JobName: new FormControl(null),
    WriteStatus: new FormControl(null),
  });

  stageOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  writeStatusOptions: ISelectOption[] = [];

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeSearchDialogData,
  ) {
    super();
    this.stageOptions = data.stageOptions;
    this.jobOptions = data.jobOptions;
    this.writeStatusOptions = data.writeStatusOptions;
  }

  confirm() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.searchForm.value);
  }
}
