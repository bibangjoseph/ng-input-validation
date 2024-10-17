import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function numericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regex = /^[0-9]*$/;
        const valid = regex.test(control.value);
        return valid ? null : {numeric: true};
    };
}
