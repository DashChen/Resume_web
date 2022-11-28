import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { DateTime } from 'luxon';

export function dateValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        try {
            const date = DateTime.fromISO(value);
            console.log(date);
            return null;
        } catch (e) {
            return { date: {actual: value} };
        }
    }
}