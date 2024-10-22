import {NgFor, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
    selector: 'ng-input-validation',
    standalone: true,
    imports: [NgIf, NgFor],
    template: `
        <div *ngIf="control && control.invalid && (control.dirty || control.touched)">
            <div *ngIf="error && showError">
                <div class="text-error-validation">
                    <p *ngIf="error.required">Champ requis</p>
                    <p *ngIf="error.email">Renseignez une adresse e-mail valide</p>
                    <p *ngIf="error.minlength">
                        {{ error.minlength.requiredLength }} caractères minimum
                    </p>
                    <p *ngIf="error.maxlength">
                        {{ error.maxlength.requiredLength }} caractères maximum
                    </p>
                    <p *ngIf="error.min">
                        La valeur minimale autorisée est {{ error.min.min }}
                    </p>
                    <p *ngIf="error.max">
                        La valeur maximale autorisée est {{ error.max.max }}
                    </p>
                    <p *ngIf="error.invalidNip">
                        Le NIP est invalide. Il doit être au format 00-0000-00000000 ou 0A-0000-00000000.
                    </p>
                    <p *ngIf="error.telephone">
                        Le numéro de téléphone est invalide. Il doit commencer par 077, 066, 065, 074, 062, ou 011.
                    </p>
                    <p *ngIf="error.numeric">
                        Ce champ ne doit contenir que des chiffres.
                    </p>
                    <p *ngIf="error.alphaNumeric">
                        Ce champ ne doit contenir que des lettres majuscules et des chiffres.
                    </p>
                    <p *ngIf="error.pattern">Le format du champ est invalide.</p>

                </div>
            </div>
        </div>

        <div *ngIf="Array.isArray(backendError[formField]) && backendError[formField]?.length > 0">
            <div class="text-error-validation">
                <p *ngFor="let error of backendError[formField]">{{ error }}</p>
            </div>
        </div>
    `,
    styleUrl: './ng-input-validation.component.scss'
})
export class NgInputValidationComponent {
    @Input({required: true}) error: any;
    @Input({required: true}) showError: boolean = true;
    @Input({required: true}) control!: AbstractControl | any;
    @Input({required: false}) backendError: any[] = [];
    @Input({required: false}) formField: any;
    protected readonly Array = Array;
}
