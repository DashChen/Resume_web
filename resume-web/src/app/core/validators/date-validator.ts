import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { DateTime } from 'luxon';

export function dateValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        try {
            const date = DateTime.fromFormat(value, 'yyyy/MM/dd');
            console.log(value, date);
            return date.isValid ? null : { date: {actual: value} };
        } catch (e) {
            return { date: {actual: value} };
        }
    }
}