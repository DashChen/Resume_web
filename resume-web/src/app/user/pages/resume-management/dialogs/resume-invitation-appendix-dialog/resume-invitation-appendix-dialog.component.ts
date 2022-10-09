import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basicDialog } from '@app/core/interfaces/basic-dialog';

@Component({
  selector: 'app-resume-invitation-appendix-dialog',
  templateUrl: './resume-invitation-appendix-dialog.component.html',
  styleUrls: ['./resume-invitation-appendix-dialog.component.scss']
})
export class ResumeInvitationAppendixDialogComponent implements OnInit {

  createFileInputWithStream?: File;
  uploadFiles: File[] = [];

  appendixForm = new FormGroup({
    AppendixName: new FormControl(''),
    AppendixType: new FormControl('file'),
    AppendixContent: new FormControl(''),
  });

  get appendixNameFormCtl() {
    return this.appendixForm.get('AppendixName') as FormControl;
  }

  getAppendixNameErrorMessage() {
    return this.appendixNameFormCtl.hasError('maxlenght') ? '超過長度限制' : '';
  }

  get appendixTypeFormCtl() {
    return this.appendixForm.get('AppendixType') as FormControl;
  }

  getAppendixTypeErrorMessage() {
    return this.appendixTypeFormCtl.hasError('maxlenght') ? '超過長度限制' : '';
  }

  get appendixContentFormCtl() {
    return this.appendixForm.get('AppendixContent') as FormControl;
  }

  getAppendixContentErrorMessage() {
    return this.appendixContentFormCtl.hasError('maxlenght') ? '超過長度限制' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationAppendixDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: basicDialog,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(isSuccess: boolean) {
    this.dialogRef.close(isSuccess ? {
      ...this.appendixForm.value,
      createFileInputWithStream: this.createFileInputWithStream,
    } : false);
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    this.uploadFiles.push(file);
    target.value = '';
  }

  downloadFile(event: MouseEvent, file: File) {
    event.preventDefault();
    event.stopPropagation();
    const downloadUrl = URL.createObjectURL(file);
    let link = document.createElement("a");
    link.href = downloadUrl;
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(downloadUrl);
    link.remove();
  }

  removeFile(index: number) {
    this.uploadFiles.splice(index, 1);
  }
}
