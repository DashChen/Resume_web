import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeInvitationService {

  showSend$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setShowSend(value: boolean) {
    this.showSend$.next(value);
  }

  getShowSend() {
    return this.showSend$.asObservable();
  }
}
