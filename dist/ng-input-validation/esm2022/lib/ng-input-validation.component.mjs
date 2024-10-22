import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgInputValidationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaW5wdXQtdmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1pbnB1dC12YWxpZGF0aW9uL3NyYy9saWIvbmctaW5wdXQtdmFsaWRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQTZDL0MsTUFBTSxPQUFPLDBCQUEwQjtJQUNWLEtBQUssQ0FBTTtJQUNYLFNBQVMsR0FBWSxJQUFJLENBQUM7SUFDMUIsT0FBTyxDQUF5Qjt1R0FIaEQsMEJBQTBCOzJGQUExQiwwQkFBMEIsdUpBdEN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQ1QsK0tBcENTLElBQUk7OzJGQXVDTCwwQkFBMEI7a0JBMUN0QyxTQUFTOytCQUNJLHFCQUFxQixjQUNuQixJQUFJLFdBQ1AsQ0FBQyxJQUFJLENBQUMsWUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQ1Q7OEJBSXdCLEtBQUs7c0JBQTdCLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO2dCQUNFLFNBQVM7c0JBQWpDLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO2dCQUNFLE9BQU87c0JBQS9CLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmctaW5wdXQtdmFsaWRhdGlvbicsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbTmdJZl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlcnJvciAmJiBzaG93RXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1lcnJvci12YWxpZGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IucmVxdWlyZWRcIj5DaGFtcCByZXF1aXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IuZW1haWxcIj5SZW5zZWlnbmV6IHVuZSBhZHJlc3NlIGUtbWFpbCB2YWxpZGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IubWlubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvci5taW5sZW5ndGgucmVxdWlyZWRMZW5ndGggfX0gY2FyYWN0w6hyZXMgbWluaW11bVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IubWF4bGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvci5tYXhsZW5ndGgucmVxdWlyZWRMZW5ndGggfX0gY2FyYWN0w6hyZXMgbWF4aW11bVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IubWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMYSB2YWxldXIgbWluaW1hbGUgYXV0b3Jpc8OpZSBlc3Qge3sgZXJyb3IubWluLm1pbiB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IubWF4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMYSB2YWxldXIgbWF4aW1hbGUgYXV0b3Jpc8OpZSBlc3Qge3sgZXJyb3IubWF4Lm1heCB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IuaW52YWxpZE5pcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGUgTklQIGVzdCBpbnZhbGlkZS4gSWwgZG9pdCDDqnRyZSBhdSBmb3JtYXQgMDAtMDAwMC0wMDAwMDAwMCBvdSAwQS0wMDAwLTAwMDAwMDAwLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IudGVsZXBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMZSBudW3DqXJvIGRlIHTDqWzDqXBob25lIGVzdCBpbnZhbGlkZS4gSWwgZG9pdCBjb21tZW5jZXIgcGFyIDA3NywgMDY2LCAwNjUsIDA3NCwgMDYyLCBvdSAwMTEuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5udW1lcmljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDZSBjaGFtcCBuZSBkb2l0IGNvbnRlbmlyIHF1ZSBkZXMgY2hpZmZyZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5hbHBoYU51bWVyaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENlIGNoYW1wIG5lIGRvaXQgY29udGVuaXIgcXVlIGRlcyBsZXR0cmVzIG1hanVzY3VsZXMgZXQgZGVzIGNoaWZmcmVzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZXJyb3IucGF0dGVyblwiPkxlIGZvcm1hdCBkdSBjaGFtcCBlc3QgaW52YWxpZGUuPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybDogJy4vbmctaW5wdXQtdmFsaWRhdGlvbi5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgTmdJbnB1dFZhbGlkYXRpb25Db21wb25lbnQge1xuICAgIEBJbnB1dCh7cmVxdWlyZWQ6IHRydWV9KSBlcnJvcjogYW55O1xuICAgIEBJbnB1dCh7cmVxdWlyZWQ6IHRydWV9KSBzaG93RXJyb3I6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCh7cmVxdWlyZWQ6IHRydWV9KSBjb250cm9sITogQWJzdHJhY3RDb250cm9sIHwgYW55O1xufVxuIl19