import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


/**
 * Validateur pour le téléphone
 * Format attendu: 077 XX XX XX
 * Préfixes acceptés: 077, 066, 065, 074, 062, 011
 */
export function telephoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }
        const cleanValue = control.value.replace(/\s/g, '');
        const telephonePattern = /^(077|066|065|074|062|011)\d{7}$/;
        if (!telephonePattern.test(cleanValue)) {
            return {telephone: true};
        }
        return null;
    };
}
