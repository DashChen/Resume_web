
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const sourceCtrl = control.parent?.get(source) as FormControl;
        const targetCtrl = control.parent?.get(target) as FormControl;
      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    }
}