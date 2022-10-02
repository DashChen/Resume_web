import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeManagementService {

  private _showPreview$: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  
  updateShowPreview(value: boolean): void {
    this._showPreview$.next(value);
  }

  get showPreview$(): Observable<boolean> {
    return this._showPreview$.asObservable();
  }
}
