import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgInputValidationComponent {
    error;
    showError = true;
    control;
    backendError = [];
    formField;
    Array = Array;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: NgInputValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: NgInputValidationComponent, isStandalone: true, selector: "ng-input-validation", inputs: { error: "error", showError: "showError", control: "control", backendError: "backendError", formField: "formField" }, ngImport: i0, template: `
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
    `, isInline: true, styles: [".text-error-validation p{color:red;font-size:12px;margin-top:5px;font-style:italic;font-weight:700}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: NgInputValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-input-validation', standalone: true, imports: [NgIf, NgFor], template: `
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
            }], backendError: [{
                type: Input,
                args: [{ required: false }]
            }], formField: [{
                type: Input,
                args: [{ required: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaW5wdXQtdmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1pbnB1dC12YWxpZGF0aW9uL3NyYy9saWIvbmctaW5wdXQtdmFsaWRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFtRC9DLE1BQU0sT0FBTywwQkFBMEI7SUFDVixLQUFLLENBQU07SUFDWCxTQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLE9BQU8sQ0FBeUI7SUFDL0IsWUFBWSxHQUFVLEVBQUUsQ0FBQztJQUN6QixTQUFTLENBQU07SUFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQzt1R0FOeEIsMEJBQTBCOzJGQUExQiwwQkFBMEIsNk1BNUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5Q1QsK0tBMUNTLElBQUksNkZBQUUsS0FBSzs7MkZBNkNaLDBCQUEwQjtrQkFoRHRDLFNBQVM7K0JBQ0kscUJBQXFCLGNBQ25CLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsWUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5Q1Q7OEJBSXdCLEtBQUs7c0JBQTdCLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO2dCQUNFLFNBQVM7c0JBQWpDLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO2dCQUNFLE9BQU87c0JBQS9CLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO2dCQUNHLFlBQVk7c0JBQXJDLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDO2dCQUNFLFNBQVM7c0JBQWxDLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0ZvciwgTmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nLWlucHV0LXZhbGlkYXRpb24nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW05nSWYsIE5nRm9yXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImVycm9yICYmIHNob3dFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWVycm9yLXZhbGlkYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5yZXF1aXJlZFwiPkNoYW1wIHJlcXVpczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5lbWFpbFwiPlJlbnNlaWduZXogdW5lIGFkcmVzc2UgZS1tYWlsIHZhbGlkZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5taW5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yLm1pbmxlbmd0aC5yZXF1aXJlZExlbmd0aCB9fSBjYXJhY3TDqHJlcyBtaW5pbXVtXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5tYXhsZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yLm1heGxlbmd0aC5yZXF1aXJlZExlbmd0aCB9fSBjYXJhY3TDqHJlcyBtYXhpbXVtXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5taW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhIHZhbGV1ciBtaW5pbWFsZSBhdXRvcmlzw6llIGVzdCB7eyBlcnJvci5taW4ubWluIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5tYXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhIHZhbGV1ciBtYXhpbWFsZSBhdXRvcmlzw6llIGVzdCB7eyBlcnJvci5tYXgubWF4IH19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5pbnZhbGlkTmlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMZSBOSVAgZXN0IGludmFsaWRlLiBJbCBkb2l0IMOqdHJlIGF1IGZvcm1hdCAwMC0wMDAwLTAwMDAwMDAwIG91IDBBLTAwMDAtMDAwMDAwMDAuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci50ZWxlcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExlIG51bcOpcm8gZGUgdMOpbMOpcGhvbmUgZXN0IGludmFsaWRlLiBJbCBkb2l0IGNvbW1lbmNlciBwYXIgMDc3LCAwNjYsIDA2NSwgMDc0LCAwNjIsIG91IDAxMS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImVycm9yLm51bWVyaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENlIGNoYW1wIG5lIGRvaXQgY29udGVuaXIgcXVlIGRlcyBjaGlmZnJlcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImVycm9yLmFscGhhTnVtZXJpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2UgY2hhbXAgbmUgZG9pdCBjb250ZW5pciBxdWUgZGVzIGxldHRyZXMgbWFqdXNjdWxlcyBldCBkZXMgY2hpZmZyZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJlcnJvci5wYXR0ZXJuXCI+TGUgZm9ybWF0IGR1IGNoYW1wIGVzdCBpbnZhbGlkZS48L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiQXJyYXkuaXNBcnJheShiYWNrZW5kRXJyb3JbZm9ybUZpZWxkXSkgJiYgYmFja2VuZEVycm9yW2Zvcm1GaWVsZF0/Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWVycm9yLXZhbGlkYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8cCAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgYmFja2VuZEVycm9yW2Zvcm1GaWVsZF1cIj57eyBlcnJvciB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsOiAnLi9uZy1pbnB1dC12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ0lucHV0VmFsaWRhdGlvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KHtyZXF1aXJlZDogdHJ1ZX0pIGVycm9yOiBhbnk7XG4gICAgQElucHV0KHtyZXF1aXJlZDogdHJ1ZX0pIHNob3dFcnJvcjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KHtyZXF1aXJlZDogdHJ1ZX0pIGNvbnRyb2whOiBBYnN0cmFjdENvbnRyb2wgfCBhbnk7XG4gICAgQElucHV0KHtyZXF1aXJlZDogZmFsc2V9KSBiYWNrZW5kRXJyb3I6IGFueVtdID0gW107XG4gICAgQElucHV0KHtyZXF1aXJlZDogZmFsc2V9KSBmb3JtRmllbGQ6IGFueTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgQXJyYXkgPSBBcnJheTtcbn1cbiJdfQ==