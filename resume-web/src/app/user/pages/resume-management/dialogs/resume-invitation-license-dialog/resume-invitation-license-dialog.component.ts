import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { BaseDestoryComponent } from '@app/shared/components/base-destory.component';
import { filter, takeUntil } from 'rxjs';
import { skill, skills, skillsList } from '@app/core/interfaces/skill.model';

@Component({
  selector: 'app-resume-invitation-license-dialog',
  templateUrl: './resume-invitation-license-dialog.component.html',
  styleUrls: ['./resume-invitation-license-dialog.component.scss']
})
export class ResumeInvitationLicenseDialogComponent extends BaseDestoryComponent implements OnInit {

  choiceLimit: number = 20;

  licensesControl = new FormControl([]);
  licenseList: skillsList[] = [];
  mainLicenses: skill[] = [];
  showSelectLicenseBlock: boolean = false;
  choiceLicenseTypeId: string = '';
  choiceLicenseTypeName: string = '';
  choiceLicenseGroup: skills[] = [];
  choiceGroupId: string = '';
  choicedSkills: skill[] = [];

  otherLicense: FormControl = new FormControl('');

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<ResumeInvitationLicenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
    if (data?.item) {
      const skills =JSON.parse(data.item?.name);
      if (skills) {
        this.licensesControl.setValue(skills);
      }
      this.otherLicense.setValue(data.item?.note || '');
    }
  }

  ngOnInit(): void {
    this.store.select(CommonSelectors.selectSkillsList)
      .pipe(
        filter(list => list.length > 0),
        takeUntil(this.destroy$)
      ).subscribe( res => {
        this.licenseList = res;
      });
    this.store.select(CommonSelectors.selectMainSkills)
      .pipe(
        filter(list => list.length > 0),
        takeUntil(this.destroy$)
      ).subscribe( res => {
        this.mainLicenses = res;
      });
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

  closeDialog(isSuccess: boolean) {
    this.dialogRef.close(isSuccess ? {
      name: this.choicedSkills.map(v => v.des).join(','),
      // name: JSON.stringify(this.choicedSkills),
      note: this.otherLicense.value,
    } : false);
  }

  showSelectLicense(event: MatChipInputEvent) {
    console.log('showSelectLicense', event);
    this.showSelectLicenseBlock = true;
  }

  confirmAddLicenses() {
    console.log('confirmAddLicenses');
    this.showSelectLicenseBlock = false;
    this.licensesControl.setValue(this.choicedSkills);
  }

  closeShowLicense() {
    this.choiceLicenseTypeName = '';
    this.choiceLicenseGroup = [];
    this.showSelectLicenseBlock = false;
  }

  showLicenseGroup(data: skill) {
    this.choiceLicenseTypeId = data.no;
    this.choiceLicenseTypeName = data.des;
    const index = this.licenseList.findIndex((i: skillsList) => i.no === data.no);
    if (index > -1) {
      this.choiceLicenseGroup = this.licenseList[index].n || [];
    }
  }

  updateChoiceGroupId(group: skills) {
    this.choiceGroupId = group.no;
  }

  checkItme(item: skill) {
    return this.choicedSkills.find((i: skill) => {
      return i.no === item.no;
    }) ? true : false;
  }

  changeCheck(checked: boolean, item: skill) {
    if (checked && this.choicedSkills.length < this.choiceLimit) {
      this.choicedSkills.push(item);
    } else {
      const index = this.choicedSkills.findIndex((i: skill) => i.no === item.no);
      if (index > -1) {
        this.choicedSkills.splice(index, 1);
      }
    }
  }
}
