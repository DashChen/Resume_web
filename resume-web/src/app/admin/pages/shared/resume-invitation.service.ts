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
  private responseText: ResumeData[] = [
    { id: '1', name: '工程師1', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '2', name: '工程師2', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '3', name: '工程師3', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '4', name: '工程師4', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '5', name: '工程師5', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '6', name: '工程師6', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '7', name: '工程師7', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '8', name: '工程師8', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '9', name: '工程師9', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '10', name: '工程師10', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '11', name: '工程師11', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '12', name: '工程師12', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
    { id: '13', name: '工程師13', identityId: 'A123456789', mobile: '0912123456', email: 'da-ming.wa@gmail.com', job: 'sm', level: '1' },
  ];

  private apiGetResultsRequest$(): Observable<ResumeData[]> {
    return new Observable(subscriber => {
      subscriber.next(this.responseText);
      subscriber.complete();
    });
  }

  private apiGetResultRequest$(id: string): Observable<ResumeData|null> {
    return new Observable(subscriber => {
      let responseText: any = this.responseText.find(item => id === item.id);
      if (responseText === undefined) {
        responseText = null;
      }
      subscriber.next(responseText);
      subscriber.complete();
    });
  }

  private apiCreateResultRequest$(data: Omit<ResumeData, 'id'>): Observable<boolean> {
    return new Observable(subscriber => {
      const result = { id: Date.now().toString(), name: '', identityId: '', mobile: '', email: '', job: 'sm', level: '1' };
      this.responseText = [...this.responseText, { ...result, ...data }]

      subscriber.next(true);
      subscriber.complete();
    });
  }

  private apiUpdateResultRequest$(id: string, data: Omit<ResumeData, 'id'>): Observable<boolean> {
    return new Observable(subscriber => {
      const index = this.responseText.findIndex(item => id === item.id);
      if (index > -1) {
        this.responseText.splice(index, 1, { id, ...data });
      }

      subscriber.next(true);
      subscriber.complete();
    });
  }

  private apiDeleteResultRequest$(id: string): Observable<boolean> {
    return new Observable(subscriber => {
      this.responseText = this.responseText.filter((item) => item.id !== id);

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

        this.resumes = [...this.resumes, data];
        this.refresh();
      },
    });
  }

  createResume(data: Omit<ResumeData, 'id'>) {
    return this.apiCreateResultRequest$(data).pipe(
      tap({
        next: () => {
          this.getResumes();
        },
      })
    );
  }

  updateResume(id: string, data: Omit<ResumeData, 'id'>) {
    return this.apiUpdateResultRequest$(id, data).pipe(
      tap({
        next: () => {
          this.getResume(id);
        },
      })
    );
  }

  deleteResume(id: string) {
    this.resumes = this.resumes.filter((resume) => resume.id !== id);
    this.refresh();
    return this.apiDeleteResultRequest$(id);
  }

  get resumes$(): Observable<ResumeData[]> {
    return this._resumes$.asObservable();
  }

}
