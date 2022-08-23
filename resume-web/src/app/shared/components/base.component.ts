import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormErrorStateMatcher } from "@app/core";
import { IBasicDialog } from "@app/core/interfaces/basic-dialog";
import { Subject } from "rxjs";

@Component({template: ''})
export class BaseComponent implements OnDestroy {
    matcher = new FormErrorStateMatcher();

    dialogConfig: IBasicDialog = {} as IBasicDialog;
    destroy$: Subject<null> = new Subject();

    ngOnDestroy(): void {
        this.destroy$.next(null);
        this.destroy$.complete();
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        })
    }
}