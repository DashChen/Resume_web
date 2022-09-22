import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormErrorStateMatcher } from "@app/core";
import { BaseDestoryComponent } from "./base-destory.component";

@Component({template: ''})
export class BaseFormComponent extends BaseDestoryComponent {
    matcher = new FormErrorStateMatcher();

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