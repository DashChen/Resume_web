import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function minLengthArrayValidator(min: number = 1): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        return value.length >= min ? null : {'minLengthArray': {valid: false, min}};
    }
}