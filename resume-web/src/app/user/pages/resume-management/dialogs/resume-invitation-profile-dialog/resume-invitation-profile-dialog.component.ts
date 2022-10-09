import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CropperjsComponent, ImageCropperResult } from '@app/shared/components/cropperjs/cropperjs.component';


@Component({
  selector: 'app-resume-invitation-profile-dialog',
  templateUrl: './resume-invitation-profile-dialog.component.html',
  styleUrls: ['./resume-invitation-profile-dialog.component.scss']
})
export class ResumeInvitationProfileDialogComponent implements OnInit {
  @ViewChild('angularCropper') public angularCropper?: CropperjsComponent;
  cropperConfig: any;
  imageObjectUrl!: string;
  cropperImageUrl!: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ResumeInvitationProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(isSuccess: boolean) {
    URL.revokeObjectURL(this.imageObjectUrl);
    this.dialogRef.close(isSuccess ? this.angularCropper?.cropper?.getCroppedCanvas() : false);
  }

  uploadImageFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    this.imageObjectUrl = URL.createObjectURL(file);
    this.cropperImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageObjectUrl);
  }

  cropperResult(res: ImageCropperResult) {
    URL.revokeObjectURL(this.imageObjectUrl);
    console.log('cropperResult', res);
  }
}
