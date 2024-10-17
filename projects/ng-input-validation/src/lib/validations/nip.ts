import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nipValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        // Vérification si le champ est vide
        if (!value) {
            return null;
        }
        // Expression régulière pour les formats 14-0020-19931130 et 1Z-0020-19931130
        const nipPattern = /^(\d{2}|[1-9][A-Z])-0020-\d{8}$/;
        // Validation du format du NIP
        return nipPattern.test(value) ? null : {invalidNip: true};
    };
}
