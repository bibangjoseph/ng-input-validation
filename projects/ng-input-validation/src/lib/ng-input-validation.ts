import {Component, input} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'ng-input-validation',
  imports: [],
  standalone: true,
  template: `
        @if (control() && control()!.invalid && (control()!.dirty || control()!.touched)) {
            @if (control()!.errors) {
                @let error = control()!.errors;
                <div class="text-error-validation">
                    <i class="error-icon"></i>
                    @if (error['required']) {
                        <span>{{ errorMessages()?.required || 'Ce champ est requis' }}</span>
                    }
                    @if (error['email']) {
                        <span>{{ errorMessages()?.email || 'Adresse email invalide' }}</span>
                    }
                    @if (error['minlength']) {
                        <span>{{ errorMessages()?.minlength || (error['minlength'].requiredLength + ' caractères minimum') }}</span>
                    }
                    @if (error['maxlength']) {
                        <span>{{ errorMessages()?.maxlength || (error['maxlength'].requiredLength + ' caractères maximum') }}</span>
                    }
                    @if (error['min']) {
                        <span>{{ errorMessages()?.min || ('La valeur minimale autorisée est ' + error['min'].min) }}</span>
                    }
                    @if (error['max']) {
                        <span>{{ errorMessages()?.max || ('La valeur maximale autorisée est ' + error['max'].max) }}</span>
                    }
                    @if (error['invalidNip']) {
                        <span>{{ errorMessages()?.invalidNip || 'Le NIP est invalide. Format attendu: 00-0000-00000000 ou 0A-0000-00000000.' }}</span>
                    }
                    @if (error['telephone']) {
                        <span>{{ errorMessages()?.telephone || 'Le numéro de téléphone est invalide. Il doit commencer par 077, 066, 065, 074, 062, ou 011.' }}</span>
                    }
                    @if (error['numeric']) {
                        <span>{{ errorMessages()?.numeric || 'Ce champ ne doit contenir que des chiffres.' }}</span>
                    }
                    @if (error['alphaNumeric']) {
                        <span>{{ errorMessages()?.alphaNumeric || 'Ce champ ne doit contenir que des lettres majuscules et des chiffres.' }}</span>
                    }
                    @if (error['pattern']) {
                        <span>{{ errorMessages()?.pattern || 'Le format du champ est invalide.' }}</span>
                    }
                </div>
            }
        }

        @if (backendError() && formField() && Array.isArray(backendError()[formField()])) {
            <div class="text-error-validation">
                @for (error of backendError()[formField()]; track error) {
                    <i class="error-icon"></i>
                    <span>{{ error }}</span>
                }
            </div>
        }
    `,
  styleUrl: './ng-input-validation.css'
})
export class NgInputValidationComponent {
  control = input.required<AbstractControl | any>();
  backendError = input<any[]>([])
  errorMessages = input<any>()
  formField = input<string | any>('');
  protected readonly Array = Array;
}
