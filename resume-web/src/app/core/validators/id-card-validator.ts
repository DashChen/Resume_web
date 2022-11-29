import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function idCardValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        const verification = value.toString().match(/^[A-Z]{1}[1-2]{1}[0-9]{8}$/g);
        let checkSumPass = false;
        if (verification) {
            let conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
            let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]

            let id = String(conver.indexOf(value[0]) + 10) + value.slice(1);
            let checkSum = 0;
            for (let i = 0; i < id.length; i++) {
                let c = parseInt(id[i]);
                let w = weights[i];
                checkSum += c * w;
            }
            checkSumPass = checkSum % 10 == 0;
        }
        const valid = verification && checkSumPass;

        return !valid ? { idCard: {verification, checkSumPass} }: null;
    }
}