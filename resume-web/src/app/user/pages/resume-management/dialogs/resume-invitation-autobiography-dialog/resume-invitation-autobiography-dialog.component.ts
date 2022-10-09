import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basicDialog } from '@app/core/interfaces/basic-dialog';

export interface autobiographiesDialogData extends basicDialog {
  autobiographies: string;
}

@Component({
  selector: 'app-resume-invitation-autobiography-dialog',
  templateUrl: './resume-invitation-autobiography-dialog.component.html',
  styleUrls: ['./resume-invitation-autobiography-dialog.component.scss']
})
export class ResumeInvitationAutobiographyDialogComponent implements OnInit {

  autobiographiesForm = new FormGroup({
    autobiographies: new FormControl('', [Validators.maxLength(4000)]),
  });

  get autobiographiesFormCtl() {
    return this.autobiographiesForm.get('autobiographies') as FormControl;
  }

  getAutobiographiesErrorMessage() {
    return this.autobiographiesFormCtl.hasError('maxlenght') ? '超過長度限制' : '';
  }

  get contentLen() {
    return this.autobiographiesFormCtl.value.toString().length || 0;
  }

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationAutobiographyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: autobiographiesDialogData,
  ) {
    this.autobiographiesFormCtl.setValue(data.autobiographies);
  }

  ngOnInit(): void {
  }

  closeDialog(isSuccess: boolean) {
    this.dialogRef.close(isSuccess ? this.autobiographiesForm.value : false);
  }
}
