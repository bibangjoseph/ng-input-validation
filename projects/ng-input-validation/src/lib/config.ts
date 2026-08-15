import { InjectionToken } from '@angular/core';

export const DEFAULT_VALIDATION_MESSAGES: Record<string, string | ((errorValue: any) => string)> = {
    required: 'Ce champ est requis',
    email: 'Adresse email invalide',
    minlength: (errorValue) => `${errorValue.requiredLength} caractères minimum`,
    maxlength: (errorValue) => `${errorValue.requiredLength} caractères maximum`,
    min: (errorValue) => `La valeur minimale autorisée est ${errorValue.min}`,
    max: (errorValue) => `La valeur maximale autorisée est ${errorValue.max}`,
    telephone: 'Le numéro de téléphone est invalide. Il doit commencer par 077, 066, 065, 074, 062, ou 011.',
    pattern: 'Le format du champ est invalide.'
};

export const NG_VALIDATION_MESSAGES = new InjectionToken<Record<string, string | ((errorValue: any) => string)>>(
    'NG_VALIDATION_MESSAGES'
);
