import { NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';

class NgInputValidationComponent {
    error;
    showError = true;
    control;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: NgInputValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: NgInputValidationComponent, isStandalone: true, selector: "ng-input-validation", inputs: { error: "error", showError: "showError", control: "control" }, ngImport: i0, template: `
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
    `, isInline: true, styles: [".text-error-validation p{color:red;font-size:12px;margin-top:5px;font-style:italic;font-weight:700}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: NgInputValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-input-validation', standalone: true, imports: [NgIf], template: `
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
    `, styles: [".text-error-validation p{color:red;font-size:12px;margin-top:5px;font-style:italic;font-weight:700}\n"] }]
        }], propDecorators: { error: [{
                type: Input,
                args: [{ required: true }]
            }], showError: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { NgInputValidationComponent };
//# sourceMappingURL=ng-input-validation.mjs.map
