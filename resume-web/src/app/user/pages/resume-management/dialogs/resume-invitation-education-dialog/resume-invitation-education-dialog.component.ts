import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { Store } from '@ngrx/store';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { ResumeEducationsEducationDto, ResumeShareCodesShareCodeDto } from '@app/core/models/Api';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { area, areas, areasList } from '@app/core/interfaces/ares.model';
import { DateTime } from 'luxon';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from '@angular/material-luxon-adapter';
import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { omit, omitBy } from 'lodash';

export interface ResumeInvitationEducationDialogData extends basicDialog {
  item: ResumeEducationsEducationDto;
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'yyyy/MM',
  },
  display: {
    dateInput: 'yyyy/MM',
    monthYearLabel: 'yyyy MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'yyyy MMMM',
  },
};

@Component({
  selector: 'app-resume-invitation-education-dialog',
  templateUrl: './resume-invitation-education-dialog.component.html',
  styleUrls: ['./resume-invitation-education-dialog.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter ,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS ],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ResumeInvitationEducationDialogComponent extends BaseFormComponent implements OnInit {

  eductionCodeList: ResumeShareCodesShareCodeDto[] = [];
  graduateCodeList: ResumeShareCodesShareCodeDto[] = [];
  areasList: areasList[] = [];
  mainAreas: area[] = [];
  choicedAreas$: Observable<areas[]> = of([]);

  eductionForm = new FormGroup({
    school: new FormControl('', [Validators.required]),
    educationCode: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    dateA: new FormControl('', [Validators.required]),
    dateD: new FormControl('', [Validators.required]),
    graduationCode: new FormControl(''),
    schoolLocation: new FormControl(''),
    note: new FormControl(''),
    area: new FormControl(''),
    region: new FormControl(''),
  });
  item: ResumeEducationsEducationDto = {} as ResumeEducationsEducationDto;
  changed: boolean = false;
  tempArea: area = {} as area;

  get schoolFormCtl() {
    return this.eductionForm.get('school') as FormControl;
  }

  getSchoolErrorMessage() {
    return this.schoolFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get educationCodeFormCtl() {
    return this.eductionForm.get('educationCode') as FormControl;
  }

  getEductionCodeErrorMessage() {
    return this.educationCodeFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get majorFormCtl() {
    return this.eductionForm.get('major') as FormControl;
  }

  getMajorErrorMessage() {
    return this.majorFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get dateAFormCtl() {
    return this.eductionForm.get('dateA') as FormControl;
  }

  getDateAErrorMessage() {
    return this.dateAFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get dateDFormCtl() {
    return this.eductionForm.get('dateD') as FormControl;
  }

  getDateDErrorMessage() {
    return this.dateDFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get graduationCodeFormCtl() {
    return this.eductionForm.get('graduationCode') as FormControl;
  }

  getGraduationCodeErrorMessage() {
    return this.graduationCodeFormCtl.hasError('required') ? '此欄位必填' : '';
  }

  get schoolLocationFormCtl() {
    return this.eductionForm.get('schoolLocation') as FormControl;
  }

  get noteFormCtl() {
    return this.eductionForm.get('note') as FormControl;
  }

  get areaFormCtl() {
    return this.eductionForm.get('area') as FormControl;
  }

  get regionFormCtl() {
    return this.eductionForm.get('region') as FormControl;
  }

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<ResumeInvitationEducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeInvitationEducationDialogData,
  ) {
    super();
    this.item = data.item;
    this.schoolFormCtl.setValue(data.item?.school || '');
    this.educationCodeFormCtl.setValue(data.item?.educationCode || '');
    this.majorFormCtl.setValue(data.item?.major || '');
    this.dateAFormCtl.setValue(data.item?.dateA || '');
    this.dateDFormCtl.setValue(data.item?.dateD || '');
    this.graduationCodeFormCtl.setValue(data.item?.graduationCode || '');
    this.schoolLocationFormCtl.setValue(data.item?.schoolLocation || '');
    this.areaFormCtl.valueChanges.subscribe(no => {
      const index = this.areasList.findIndex(i => i.no === no);
      console.log(no, index);
      if (index > -1) {
        this.choicedAreas$ = of(this.areasList[index].n || []);
        this.tempArea = this.areasList[index];
        if (!this.changed && this.item.note) {
          console.log('changed')
          this.regionFormCtl.setValue(this.item.note.split('_')[1]);
          this.changed = true;
        }
      }
    });
    this.regionFormCtl.valueChanges.subscribe(no => {
      this.choicedAreas$.pipe(
        tap(items => {
          const area = items.find(i => i.no === no);
          const val = this.tempArea.des ? this.tempArea.des + '_' + (area?.des || '') : (area?.des || '');
          this.schoolLocationFormCtl.setValue(val);
          if (area?.no) {
            this.noteFormCtl.setValue(this.tempArea.no + '_' + area?.no);
          }
        })
      )
    });
  }

  ngOnInit(): void {
    this.store.select(UserSelectors.selectEductionCodeList).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.eductionCodeList = res;
      });
    this.store.select(UserSelectors.selectGraduateCodeList).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.graduateCodeList = res;
      });
    this.store.select(CommonSelectors.selectAreaList).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.areasList = res;
      });
    this.store.select(CommonSelectors.selectMainAreas).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res => {
        this.mainAreas = res;
      });
    if (this.item?.note?.includes('_')) {
      this.areaFormCtl.setValue(this.item.note.split('_')[0]);
    }
  }

  closeDialog(isSuccess: boolean) {
    let res = {...this.eductionForm.value};
    if (isSuccess) {
      this.graduationCodeFormCtl.setValidators([Validators.required]);
      this.graduationCodeFormCtl.updateValueAndValidity();
      this.eductionForm.markAllAsTouched();
      if (this.eductionForm.invalid) {
        return;
      }
      res = omit(res, ['area', 'region']);
    }
    this.dialogRef.close(isSuccess ? res : false);
  }

  dateFilter = (d: Date | null): boolean => {
    let date;
    if (!d) {
      date = DateTime.now().toJSDate();
    } else if (d instanceof DateTime) {
      date = d.toJSDate();
    } else {
      date = d;
    }
    const choiceD = DateTime.fromJSDate(date).valueOf();
    const minD = this.minDate.valueOf();
    let maxD;
    if (!this.dateDFormCtl.value) {
      maxD = this.maxDate.valueOf();
    } else if (this.dateDFormCtl.value instanceof DateTime) {
      maxD = this.dateDFormCtl.value.toJSDate();
    } else {
      maxD = DateTime.fromJSDate(this.dateDFormCtl.value).valueOf();
    }
    return choiceD >= minD && choiceD <= maxD;
  }

  dateFilterE = (d: Date | null): boolean => {
    let date;
    if (!d) {
      date = DateTime.now().toJSDate();
    } else if (d instanceof DateTime) {
      date = d.toJSDate();
    } else {
      date = d;
    }
    const choiceD = DateTime.fromJSDate(date).valueOf();
    let minD;
    if (!this.dateAFormCtl.value) {
      minD = this.maxDate.valueOf();
    } else if (this.dateAFormCtl.value instanceof DateTime) {
      minD = this.dateAFormCtl.value.toJSDate();
    } else {
      minD = DateTime.fromJSDate(this.dateAFormCtl.value).valueOf();
    }
    const maxD = this.maxDate.valueOf();
    return choiceD >= minD && choiceD <= maxD;
  }

  setStartMonthAndYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<DateTime>) {
    console.log(normalizedMonthAndYear);
    this.dateAFormCtl.setValue(normalizedMonthAndYear);
    datepicker.close();
  }

  setEndMonthAndYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<any>) {
    console.log(normalizedMonthAndYear);
    this.dateDFormCtl.setValue(normalizedMonthAndYear);
    datepicker.close();
  }
}
