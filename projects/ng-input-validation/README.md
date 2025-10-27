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
- ✅ **Directive de masque** : Formatage automatique du numéro de téléphone
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

### Validateur personnalisé (RDC)

#### Validateur Téléphone

Préfixes acceptés : `077`, `066`, `065`, `074`, `062`, `011`
Format : `077 12 34 56` ou `0771234567`

```typescript
import {telephoneValidator} from 'ng-input-validation';

form = new FormGroup({
    telephone: new FormControl('', [Validators.required, telephoneValidator()])
});
```

## 🎨 Directive de masque

### Masque Téléphone

Formate automatiquement au format `077 XX XX XX`

```typescript
import {TelephoneMaskDirective} from 'ng-input-validation';

@Component({
    imports: [TelephoneMaskDirective],
    template: `
    <input formControlName="telephone" telephoneMask placeholder="077 12 34 56">
  `
})
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
        [
            "Cette adresse email est déjà utilisée",
            "L'email appartient à un compte désactivé"
        ],
            "telephone"
    :
        [
            "Ce numéro est déjà enregistré"
        ]
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
    (input)="delete backendErrors['email']"
>
<ng-input-validation
    [control]="form.get('email')"
    [backendError]="backendErrors"
    [formField]="'email'"
/>
```

## 🎨 Personnalisation du style

La librairie utilise les classes CSS suivantes :

```css
.text-error-validation {
    color: #f44336;
    font-size: 12px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.error-icon::before {
    content: "⚠";
}
```

Vous pouvez surcharger ces styles dans votre application :

```css
/* styles.css */
::ng-deep .text-error-validation {
    color: #d32f2f;
    font-size: 14px;
    font-weight: 500;
}
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
import {
    NgInputValidationComponent,
    telephoneValidator,
    TelephoneMaskDirective
} from 'ng-input-validation';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgInputValidationComponent,
        TelephoneMaskDirective
    ],
    template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      
      <!-- Email -->
      <div>
        <label>Email</label>
        <input 
          type="email" 
          formControlName="email"
          (input)="clearError('email')"
        >
        <ng-input-validation 
          [control]="registerForm.get('email')"
          [backendError]="backendErrors"
          [formField]="'email'"
        />
      </div>

      <!-- Téléphone avec masque -->
      <div>
        <label>Téléphone</label>
        <input 
          type="tel" 
          formControlName="telephone"
          telephoneMask
          (input)="clearError('telephone')"
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
          (input)="clearError('nom')"
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

    clearError(field: string) {
        delete this.backendErrors[field];
    }
}
```

## 🏗️ Développement

### Construire la librairie

```bash
ng build ng-input-validation
```

### Mode watch (développement)

```bash
ng build ng-input-validation --watch
```

### Tests unitaires

```bash
ng test ng-input-validation
```

## 📋 Prérequis

- Angular 17+ (pour la syntaxe de contrôle de flux moderne)
- TypeScript 5.x+
- RxJS 7.x+

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT © [Votre Nom]

## 🔗 Liens utiles

- [Documentation Angular](https://angular.dev)
- [Guide des formulaires réactifs](https://angular.dev/guide/forms/reactive-forms)
- [Angular CLI](https://angular.dev/tools/cli)

## ✨ Auteur

Créé avec ❤️ pour la communauté Angular RDC

---

**Note** : Cette librairie a été générée avec [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.
