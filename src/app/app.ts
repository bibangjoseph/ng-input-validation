import {Component} from '@angular/core';
import {NgInputValidationComponent, telephoneValidator} from 'ng-input-validation';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [NgInputValidationComponent, ReactiveFormsModule],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    testForm = new FormGroup({
        text: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        minlength: new FormControl('', [Validators.required, Validators.minLength(5)]),
        maxlength: new FormControl('', [Validators.required, Validators.maxLength(5)]),
        numeric: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        alphanumeric: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
        telephone: new FormControl('', [Validators.required, telephoneValidator()]),
        min: new FormControl('', [Validators.required, Validators.min(10)]),
        max: new FormControl('', [Validators.required, Validators.max(10)]),
        pattern: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    })
    backendErrors: any = {
        email: [
            'Cette adresse email est déjà utilisée',
            'L\'email appartient à un compte désactivé'
        ],
        telephone: [
            'Ce numéro de téléphone est déjà enregistré'
        ],
    };
    protected title = 'ng-input-validation-workspace';
}
