import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function alphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regex = /^[A-Z0-9]*$/;
        const valid = regex.test(control.value);
        return valid ? null : {alphaNumeric: true};
    };
}
