import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function nameValidator(maxLength: number = 50): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        if (value.length > maxLength) {
            return { maxlength : { maxLength, actual: value.length }};
        }
        const regex = /^[^(\t|\n|\v|\f|\r|\s|\0|\\|\+|\*|\\|\?|\^|\$|\[|\]|\{|\}|\(|\)|||\/|:|;|>|<|!|@|#|`|~|%|&|=|'|"|0-9|_)]{1,}$/gm;
        const valid = value.match(regex)
        // console.log(valid);
        return !valid ? { name: {pattern: regex, actual: value }}: null;
    }
}