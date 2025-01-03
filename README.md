# ng-input-validation

La librairie `ng-input-validation` fournit des composants et des validateurs personnalisés pour simplifier la validation des formulaires dans Angular.

## Compatibilité des Versions

La librairie `ng-input-validation` est compatible avec Angular à partir de la version **17**. Assurez-vous d'utiliser une version d'Angular égale ou supérieure pour garantir le bon fonctionnement de la librairie.

## Utilisation

1. **Importer le composant** :

   Dans le module de ton application ou dans le composant parent, importe le module de la librairie :

   ```typescript
   import { NgInputValidationComponent } from "ng-input-validation";
   import { ReactiveFormsModule } from "@angular/forms";
   ```

Ajoute `NgInputValidationComponent` et `ReactiveFormsModule` à la liste des imports de ton composant :

   ```typescript
   @Component({
    selector: "app-parent",
    standalone: true,
    imports: [ReactiveFormsModule, NgInputValidationComponent],
})
export class ParentComponent {
    // Logique du composant...
}
   ```

2. **Utiliser le composant dans le template** :

   Utilise le composant `ng-input-validation` dans ton template en lui passant les contrôles et les erreurs :

   ```html
   <form [formGroup]="form">
     <div class="form-group">
       <label for="name">Name</label>
       <input type="text" id="name" class="form-control" formControlName="name" />
       <ng-input-validation [error]="form.get('name')?.errors" [control]="form.get('name')" [showError]="true"></ng-input-validation>
     </div>
     <!-- Ajoute d'autres champs de formulaire ici -->
   </form>
   ```

## Propriétés

| Propriété   | Type              | Description                                      |
|-------------|-------------------|--------------------------------------------------|
| `control`   | `AbstractControl` | Le contrôle du formulaire à valider.             |
| `error`     | `any`             | Les erreurs de validation associées au contrôle. |
| `showError` | `boolean`         | Indique si les erreurs doivent être affichées.   |

## Types d'erreurs gérés Nativement par Angular

La librairie `ng-input-validation` prend en charge les types d'erreurs suivants :

| Type d'erreur | Message d'erreur                     |
|---------------|--------------------------------------|
| required      | Champ requis                         |
| email         | Renseignez une adresse e-mail valide |
| minlength     | xxx caractères minimum               |
| maxlength     | xxx caractères maximum               |
| min           | La valeur minimale autorisée est xxx |
| max           | La valeur maximale autorisée est xxx |
| pattern       | Le format du champ est invalide      |

Ces messages d'erreur peuvent être personnalisés et affichés dynamiquement en fonction des validations appliquées à chaque champ de formulaire.

## Validations personnalisées

En plus des validations natives d'Angular, la librairie propose plusieurs **validations personnalisées** prêtes à l'emploi :

| Type de validation | Nom du validateur       | Description                                                                                                   |
|--------------------|-------------------------|---------------------------------------------------------------------------------------------------------------|
| Alphanumérique     | `alphaNumericValidator` | Valide que la chaîne contient uniquement des lettres et chiffres.                                             |
| Numérique          | `numericValidator`      | Valide que la chaîne contient uniquement des chiffres.                                                        |
| NIP                | `nipValidator`          | Valide que le numéro de NIP respecte le format 14-0020-19931130 ou 1Z-0020-19931130.                          |
| Téléphone          | `telephoneValidator`    | Valide que le numéro de téléphone commence par 077, 066, 065, 074, 062 ou 011 et suit le format 077 XX XX XX. |

## Exemple d'utilisation des Validations Personnalisées

Voici comment vous pouvez utiliser les validations personnalisées dans un formulaire réactif.

1. **Ajouter les Validators dans votre composant :**

   Dans votre composant, vous pouvez définir un formulaire réactif et utiliser les validateurs personnalisés fournis par la librairie.

   ```typescript
   import { Component } from '@angular/core';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms';
   import { alphaNumericValidator, numericValidator, nipValidator, telephoneValidator } from 'ng-input-validation';

   @Component({
     selector: 'app-validation-form',
     template: `
       <form [formGroup]="form">
         <div>
           <label for="alphanumeric">Alphanumeric</label>
           <input id="alphanumeric" formControlName="alphanumeric" />
           <ng-input-validation [error]="form.get('alphanumeric')?.errors" [control]="form.get('alphanumeric')" [showError]="true"></ng-input-validation>
         </div>
         <div>
           <label for="numeric">Numeric</label>
           <input id="numeric" formControlName="numeric" />
           <ng-input-validation [error]="form.get('numeric')?.errors" [control]="form.get('numeric')" [showError]="true"></ng-input-validation>
         </div>
         <div>
           <label for="nip">NIP</label>
           <input id="nip" formControlName="nip" />
           <ng-input-validation [error]="form.get('nip')?.errors" [control]="form.get('nip')" [showError]="true"></ng-input-validation>
         </div>
         <div>
           <label for="telephone">Téléphone</label>
           <input id="telephone" formControlName="telephone" />
           <ng-input-validation [error]="form.get('telephone')?.errors" [control]="form.get('telephone')" [showError]="true"></ng-input-validation>
         </div>
       </form>
     `
   })
   export class ValidationFormComponent {
     form: FormGroup;

     constructor(private fb: FormBuilder) {
       this.form = this.fb.group({
         alphanumeric: ['', [Validators.required, alphaNumericValidator()]],
         numeric: ['', [Validators.required, numericValidator()]],
         nip: ['', [Validators.required, nipValidator()]],
         telephone: ['', [Validators.required, telephoneValidator()]]
       });
     }
   }
   ```

2. **Explication de chaque validation personnalisée :**

    - **alphaNumericValidator()** : Valide que le champ contient uniquement des lettres et des chiffres.
    - **numericValidator()** : Valide que le champ contient uniquement des chiffres.
    - **nipValidator()** : Valide que le champ contient un NIP valide (format `14-0020-19931130` ou `1Z-0020-19931130`).
    - **telephoneValidator()** : Valide que le champ contient un numéro de téléphone valide qui commence par 077, 066, 065, 074, 062 ou 011 et suit le format `077 XX XX XX`.

## Keywords

- Angular
- Validation
- Formulaires
- Erreurs
- Librairie
- ng-input-validation
- alphanumérique
- nip
- téléphone

```
