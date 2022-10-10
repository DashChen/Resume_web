import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ILicense {
  id: string;
  name: string;
  checked: boolean;
}

interface ILicenseGroup {
  id: string;
  name: string;
  items: ILicense[]
}

interface ILinenseData {
  id: string;
  name: string;
  items: ILicenseGroup[];
}

@Component({
  selector: 'app-resume-invitation-license-dialog',
  templateUrl: './resume-invitation-license-dialog.component.html',
  styleUrls: ['./resume-invitation-license-dialog.component.scss']
})
export class ResumeInvitationLicenseDialogComponent implements OnInit {

  isSuccess: boolean = false;

  licensesControl = new FormControl([]);
  licenseList: ILinenseData[] = [
    {
      id: '1',
      name: '設計/美工類',
      items: [
        {
          id: '11',
          name: '平面／網頁／多媒體相關證照',
          items: [
            {
              id: '111',
              name: 'Adobe After Effects',
              checked: false,
            },
            {
              id: '112',
              name: 'Adobe Illustrator',
              checked: false,
            },
            {
              id: '113',
              name: 'Adobe InDesign',
              checked: false,
            }
          ]
        }
      ]
    }
  ];
  showSelectLicenseBlock: boolean = false;
  choiceLicenseTypeId: string = '';
  choiceLicenseTypeName: string = '';
  choiceLicenseGroup: ILicenseGroup[] = [];
  choiceGroupId: string = '';

  constructor(
    public dialogRef: MatDialogRef<ResumeInvitationLicenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onLicenseRemoved(license: string) {
    const licenses = this.licensesControl.value as string[];
    this.removeFirst(licenses, license);
    this.licensesControl.patchValue(licenses);
  }

  removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  confirm() {
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? true : false);
  }

  showSelectLicense(event: MatChipInputEvent) {
    console.log('showSelectLicense', event);
    this.showSelectLicenseBlock = true;
  }

  confirmAddLicenses() {
    console.log('confirmAddLicenses');
    this.showSelectLicenseBlock = false;
  }

  closeShowLicense() {
    this.choiceLicenseTypeName = '';
    this.choiceLicenseGroup = [];
    this.showSelectLicenseBlock = false;
  }

  showLicenseGroup(data: ILinenseData) {
    this.choiceLicenseTypeId = data.id;
    this.choiceLicenseTypeName = data.name;
    this.choiceLicenseGroup = data.items;
  }

  updateChoiceGroupId(group: ILicenseGroup) {
    this.choiceGroupId = group.id;
  }
}
