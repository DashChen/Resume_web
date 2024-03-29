import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({template: ''})
export class BaseDestoryComponent implements OnDestroy {
    destroy$: Subject<null> = new Subject();

    ngOnDestroy(): void {
        this.destroy$.next(null);
        this.destroy$.complete();
    }
}