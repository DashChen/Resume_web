import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormErrorStateMatcher } from "@app/core";
import { DateTime } from "luxon";
import { BaseDestoryComponent } from "./base-destory.component";

@Component({template: ''})
export class BaseFormComponent extends BaseDestoryComponent {
    minDate = DateTime.now().plus({year: -80}).toLocal();
    maxDate = DateTime.now().toLocal();
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