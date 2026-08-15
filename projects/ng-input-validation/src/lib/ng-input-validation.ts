import {Component, input, inject} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {KeyValuePipe} from '@angular/common';
import {NG_VALIDATION_MESSAGES, DEFAULT_VALIDATION_MESSAGES} from './config';

@Component({
    selector: 'ng-input-validation',
    imports: [KeyValuePipe],
    standalone: true,
    template: `
        @if (control() && control()!.invalid && (control()!.dirty || control()!.touched)) {
            @if (control()!.errors; as errors) {
                <div class="text-error-validation">
                    @for (error of errors | keyvalue; track error.key) {
                        <i class="error-icon"></i>
                        <span>{{ getErrorMessage(error.key, error.value) }}</span>
                    }
                </div>
            }
        }

        @if (backendError() && formField() && Array.isArray(backendError()[formField()!])) {
            <div class="text-error-validation">
                @for (error of backendError()[formField()!]; track error) {
                    <i class="error-icon"></i>
                    <span>{{ error }}</span>
                }
            </div>
        }
    `,
    styleUrl: './ng-input-validation.css'
})
export class NgInputValidationComponent {
    control = input.required<AbstractControl | null>();
    backendError = input<Record<string, string[]>>({});
    errorMessages = input<Record<string, string | ((errorValue: any) => string)>>({});
    formField = input<string>('');
    
    protected readonly Array = Array;
    private globalMessages = inject(NG_VALIDATION_MESSAGES, { optional: true });

    getErrorMessage(errorKey: string, errorValue: any): string {
        // 1. Messages personnalisés via l'input [errorMessages]
        const customMsg = this.errorMessages()[errorKey];
        if (customMsg) {
            return typeof customMsg === 'function' ? customMsg(errorValue) : customMsg;
        }

        // 2. Messages globaux via InjectionToken NG_VALIDATION_MESSAGES
        if (this.globalMessages) {
            const globalMsg = this.globalMessages[errorKey];
            if (globalMsg) {
                return typeof globalMsg === 'function' ? globalMsg(errorValue) : globalMsg;
            }
        }

        // 3. Messages par défaut de la librairie
        const defaultMsg = DEFAULT_VALIDATION_MESSAGES[errorKey];
        if (defaultMsg) {
            return typeof defaultMsg === 'function' ? defaultMsg(errorValue) : defaultMsg;
        }

        // 4. Fallback générique ou message provenant directement de l'erreur (si définie sous forme d'objet {message: '...'})
        if (typeof errorValue === 'string') {
            return errorValue;
        }
        if (errorValue && typeof errorValue === 'object' && errorValue.message) {
            return errorValue.message;
        }

        return 'Champ invalide';
    }
}
