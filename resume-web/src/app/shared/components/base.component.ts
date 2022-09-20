import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormErrorStateMatcher } from "@app/core";
import { IBasicDialog } from "@app/core/interfaces/basic-dialog";
import { BaseDestoryComponent } from "./base-destory.component";

@Component({template: ''})
export class BaseComponent extends BaseDestoryComponent {
    matcher = new FormErrorStateMatcher();

    dialogConfig: IBasicDialog = {} as IBasicDialog;

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