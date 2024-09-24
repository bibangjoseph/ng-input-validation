import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ng-input-validation',
  standalone: true,
  imports: [NgIf],
  template: `
<div *ngIf="control && control.invalid && (control.dirty || control.touched)">
      <div class="common-error-display" *ngIf="error && showError">
        <div class="text-danger">
          <p *ngIf="error.required" class="mt-1">Champ requis</p>
          <p *ngIf="error.email" class="mt-1">Renseignez une adresse e-mail valide</p>
          <p *ngIf="error.minlength" class="mt-1">
            {{ error.minlength.requiredLength }} caractères minimum
          </p>
          <p *ngIf="error.maxlength" class="mt-1">
            {{ error.maxlength.requiredLength }} caractères maximum
          </p>
          <p *ngIf="error.min" class="mt-1">
            La valeur minimale autorisée est {{ error.min.min }}
          </p>
          <p *ngIf="error.max" class="mt-1">
            La valeur maximale autorisée est {{ error.max.max }}
          </p>
          <p *ngIf="error.pattern" class="mt-1">Le format du champ est invalide.</p>
          <!-- Ajoutez d'autres erreurs personnalisées au besoin -->
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class NgInputValidationComponent {

  @Input({ required: true }) error: any;
  @Input({ required: true }) showError: boolean = true;
  @Input({ required: true }) control!: AbstractControl | any;
}
