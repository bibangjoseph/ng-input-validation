import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function telephoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        // Vérification si le champ est vide
        if (!value) {
            return null;
        }
        // Expression régulière pour vérifier les numéros de téléphone
        const validPhoneNumberPattern = /^(077|066|065|074|062|011)\d{2}\s\d{2}\s\d{2}$/;
        // Validation du format du numéro de téléphone
        return validPhoneNumberPattern.test(value) ? null : {telephone: true};
    };
}
