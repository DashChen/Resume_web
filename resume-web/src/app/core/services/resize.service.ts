import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, Observable, Subject } from "rxjs";
import { ViewportSize } from "../interfaces/breakpoints";

@Injectable({
    providedIn: 'root'
})
export class ResizeService {

  get onResize$(): Observable<ViewportSize> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: BehaviorSubject<ViewportSize>;

  constructor() {
    this.resizeSubject = new BehaviorSubject({} as ViewportSize);
  }

  onResize(size: ViewportSize) {
    this.resizeSubject.next(size);
  }
}