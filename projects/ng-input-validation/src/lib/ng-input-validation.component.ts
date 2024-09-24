import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'ng-input-validation',
    standalone: true,
    imports: [NgIf],
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
          <p *ngIf="error.pattern">Le format du champ est invalide.</p>
          <!-- Ajoutez d'autres erreurs personnalisées au besoin -->
        </div>
      </div>
    </div>
  `,
    styleUrl: './ng-input-validation.component.scss'
})
export class NgInputValidationComponent {

    @Input({ required: true }) error: any;
    @Input({ required: true }) showError: boolean = true;
    @Input({ required: true }) control!: AbstractControl | any;
}
