# NgInputValidation

Une librairie Angular moderne pour la validation et l'affichage des erreurs de formulaires avec support des erreurs backend.

[![Angular](https://img.shields.io/badge/Angular-20.x-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Fonctionnalités

- ✅ **Validation frontend complète** : Support de tous les validateurs Angular standards
- ✅ **Erreurs backend** : Affichage des erreurs retournées par l'API
- ✅ **Messages personnalisables** : Possibilité de surcharger tous les messages d'erreur
- ✅ **Validateur personnalisé** : Téléphone pour la RDC
- ✅ **Standalone** : Compatible avec l'approche moderne d'Angular
- ✅ **Signals** : Utilise les signals Angular pour une réactivité optimale
- ✅ **TypeScript** : Entièrement typé

## 🚀 Installation

```bash
npm install ng-input-validation
```

## 📖 Utilisation de base

### 1. Importer le composant

```typescript
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgInputValidationComponent} from 'ng-input-validation';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ReactiveFormsModule, NgInputValidationComponent],
    template: `
    <form [formGroup]="form">
      <input type="email" formControlName="email">
      <ng-input-validation [control]="form.get('email')" />
    </form>
  `
})
export class AppComponent {
    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });
}
```

## 🎯 Validations supportées

### Validateurs standards Angular

| Validateur  | Message par défaut                 |
|-------------|------------------------------------|
| `required`  | Ce champ est requis                |
| `email`     | Adresse email invalide             |
| `minlength` | X caractères minimum               |
| `maxlength` | X caractères maximum               |
| `min`       | La valeur minimale autorisée est X |
| `max`       | La valeur maximale autorisée est X |
| `pattern`   | Le format du champ est invalide    |

### Validateur personnalisé (Gabon)

#### Validateur Téléphone

Préfixes acceptés : `077`, `066`, `065`, `074`, `062`, `011`
Format : `077 12 34 56` ou `0771234567`

```typescript
import {telephoneValidator} from 'ng-input-validation';

form = new FormGroup({
    telephone: new FormControl('', [Validators.required, telephoneValidator()])
});
```

## 💬 Messages personnalisés

```html

<ng-input-validation
    [control]="form.get('email')"
    [errorMessages]="{
    required: 'L\'email est obligatoire',
    email: 'Veuillez saisir un email valide'
  }"
/>
```

## 🔌 Erreurs Backend

### Structure des erreurs backend

```typescript
// Réponse du backend (Laravel, Django, etc.)
{
    "errors"
:
    {
        "email"
    :
        ["Cette adresse email est déjà utilisée", "L'email appartient à un compte désactivé"],
            "telephone"
    :
        ["Ce numéro est déjà enregistré"]
    }
}
```

### Utilisation

```typescript
export class AppComponent {
    backendErrors: any = {};

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });

    onSubmit() {
        this.http.post('/api/register', this.form.value)
            .subscribe({
                error: (error) => {
                    if (error.status === 422) {
                        this.backendErrors = error.error.errors;
                    }
                }
            });
    }
}
```

```html
<input
    type="email"
    formControlName="email"
>
<ng-input-validation
    [control]="form.get('email')"
    [backendError]="backendErrors"
    [formField]="'email'"
/>
```

## 📦 API Complète

### Inputs du composant

| Input           | Type                       | Requis | Description                           |
|-----------------|----------------------------|--------|---------------------------------------|
| `control`       | `AbstractControl`          | ✅      | Le FormControl à valider              |
| `backendError`  | `Record<string, string[]>` | ❌      | Erreurs du backend                    |
| `errorMessages` | `Record<string, string>`   | ❌      | Messages personnalisés                |
| `formField`     | `string`                   | ❌      | Nom du champ pour les erreurs backend |

## 📝 Exemple complet

```typescript
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NgInputValidationComponent, telephoneValidator} from 'ng-input-validation';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule, NgInputValidationComponent],
    template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      
      <!-- Email -->
      <div>
        <label>Email</label>
        <input 
          type="email" 
          formControlName="email"
        >
        <ng-input-validation 
          [control]="registerForm.get('email')"
          [backendError]="backendErrors"
          [formField]="'email'"
        />
      </div>

      <!-- Téléphone -->
      <div>
        <label>Téléphone</label>
        <input 
          type="tel" 
          formControlName="telephone"
          placeholder="077 12 34 56"
        >
        <ng-input-validation 
          [control]="registerForm.get('telephone')"
          [backendError]="backendErrors"
          [formField]="'telephone'"
          [errorMessages]="{
            telephone: 'Le numéro doit commencer par 077, 066, 065, 074, 062 ou 011'
          }"
        />
      </div>

      <!-- Nom -->
      <div>
        <label>Nom complet</label>
        <input 
          type="text" 
          formControlName="nom"
        >
        <ng-input-validation 
          [control]="registerForm.get('nom')"
          [backendError]="backendErrors"
          [formField]="'nom'"
        />
      </div>

      <button type="submit" [disabled]="registerForm.invalid">
        S'inscrire
      </button>
    </form>
  `
})
export class RegisterComponent {
    backendErrors: any = {};

    registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        telephone: new FormControl('', [Validators.required, telephoneValidator()]),
        nom: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    constructor(private http: HttpClient) {
    }

    onSubmit() {
        if (this.registerForm.valid) {
            this.backendErrors = {};

            this.http.post('/api/register', this.registerForm.value)
                .subscribe({
                    next: () => console.log('Inscription réussie'),
                    error: (error) => {
                        if (error.status === 422) {
                            this.backendErrors = error.error.errors;
                        }
                    }
                });
        }
    }
}
```

## 📋 Prérequis

- Angular 17+ (pour la syntaxe de contrôle de flux moderne)
- TypeScript 5.x+
- RxJS 7.x+

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 🔗 Liens utiles

- [Documentation Angular](https://angular.dev)
- [Guide des formulaires réactifs](https://angular.dev/guide/forms/reactive-forms)
- [Angular CLI](https://angular.dev/tools/cli)

## ✨ Auteur

Créé avec ❤️ par **BIBANG BEFENE Joseph Donovan** pour la communauté Angular

---

**Note** : Cette librairie a été générée avec [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.
