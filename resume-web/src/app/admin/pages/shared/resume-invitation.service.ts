import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, Subject } from 'rxjs';

import { ResumeData } from '@app/core/datas';

@Injectable({
  providedIn: 'root'
})
export class ResumeInvitationService {

  private _showSend$: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  
  updateShowSend(value: boolean): void {
    this._showSend$.next(value);
  }

  get showSend$(): Observable<boolean> {
    return this._showSend$.asObservable();
  }

  /** 開發資料 */
  private responseText: { [key: string]: ResumeData } = {
    '1': { id: '1', name: '工程師1', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '2': { id: '2', name: '工程師2', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '3': { id: '3', name: '工程師3', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '4': { id: '4', name: '工程師4', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '5': { id: '5', name: '工程師5', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '6': { id: '6', name: '工程師6', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '7': { id: '7', name: '工程師7', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '8': { id: '8', name: '工程師8', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '9': { id: '9', name: '工程師9', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '10': { id: '10', name: '工程師10', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '11': { id: '11', name: '工程師11', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '12': { id: '12', name: '工程師12', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    '13': { id: '13', name: '工程師13', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
  };

  private apiGetResultsRequest$(): Observable<ResumeData[]> {
    return new Observable(subscriber => {
      const oldData = Object.keys(this.responseText).length === 0 ? [] : Object.values(this.responseText)

      subscriber.next(oldData);
      subscriber.complete();
    });
  }

  private apiGetResultRequest$(id: string): Observable<ResumeData|null> {
    return new Observable(subscriber => {
      const oldData = this.responseText[id];

      subscriber.next(oldData);
      subscriber.complete();
    });
  }

  private apiCreateResultRequest$(data: Omit<ResumeData, 'id'>): Observable<boolean> {
    return new Observable(subscriber => {
      const nullData = { id: '', name: '', identityId: '', mobile: '', email: '', job: 'sm', level: '1' };
      const newId = Date.now().toString();
      const newData = { newId: { ...nullData, ...data, id: newId }};
      this.responseText = Object.assign({}, this.responseText, newData);

      subscriber.next(true);
      subscriber.complete();
    });
  }

  private apiUpdateResultRequest$(id: string, data: Omit<ResumeData, 'id'>): Observable<boolean> {
    return new Observable(subscriber => {
      const oldData = this.responseText[id];
      const newData = { ...oldData, ...data };
      this.responseText[id] = newData;

      subscriber.next(true);
      subscriber.complete();
    });
  }

  private apiDeleteResultRequest$(id: string): Observable<boolean> {
    return new Observable(subscriber => {
      if (this.responseText[id] !== undefined) {
        const tempData = Object.assign({}, this.responseText);
        delete tempData[id];
        this.responseText = tempData;
      }

      subscriber.next(true);
      subscriber.complete();
    });
  }

  /** 履歷管理 */
  private resumes: ResumeData[] = [];
  private _resumes$: BehaviorSubject<ResumeData[]> = new BehaviorSubject<ResumeData[]>([]);

  init(): ResumeData[] {
    return [];
  }

  refresh() {
    this._resumes$.next(this.resumes);
  }

  getResumes() {
    this.apiGetResultsRequest$().subscribe({
      next: (data) => {
        if (!data) return;

        this.resumes = data;
        this.refresh();
      },
    });
  }

  getResume(id: string) {
    this.apiGetResultRequest$(id).subscribe({
      next: (data) => {
        if (!data) return;

        const start = this.resumes.findIndex(item => data.id === item.id);
        if (start > -1) {
          this.resumes.splice(start, 1, data);
        }

        this.refresh();
      },
    });
  }

  createResume(data: Omit<ResumeData, 'id'>) {
    return this.apiCreateResultRequest$(data).subscribe({
      next: () => {
        this.getResumes();
      },
    });
  }

  updateResume(id: string, data: Omit<ResumeData, 'id'>) {
    return this.apiUpdateResultRequest$(id, data).subscribe({
      next: () => {
        this.getResume(id);
      },
    });
  }

  deleteResume(id: string) {
    return this.apiDeleteResultRequest$(id).subscribe({
      next: () => {
        this.resumes = this.resumes.filter((resume) => resume.id !== id);
        this.refresh();
      },
    });
  }

  get resumes$(): Observable<ResumeData[]> {
    return this._resumes$.asObservable();
  }

}
