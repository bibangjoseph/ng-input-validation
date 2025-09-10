# ng-input-validation

La librairie `ng-input-validation` fournit des composants et des validateurs personnalisés pour simplifier la validation des formulaires dans Angular.

## Compatibilité des Versions

La librairie `ng-input-validation` est compatible avec Angular à partir de la version 17 à Angular 20. Assurez-vous d'utiliser une version d'Angular égale ou supérieure pour garantir le bon fonctionnement de la librairie

## Utilisation

1. **Importer le composant** :

   Dans votre composant importez le module de la librairie :

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
       <ng-input-validation [control]="form.get('name')" [errorMessages]="customMessages"></ng-input-validation>
     </div>
     <!-- Ajoute d'autres champs de formulaire ici -->
   </form>
   ```

## Propriétés

| Propriété       | Type              | Description                                                               |
|-----------------|-------------------|---------------------------------------------------------------------------|
| `control`       | `AbstractControl` | Le contrôle du formulaire à valider.                                      |
| `errorMessages` | `any`             | Objet optionnel pour personnaliser les messages d'erreurs par validation. |

## Personnalisation des Messages d'Erreurs

La librairie `ng-input-validation` permet de personnaliser les messages d'erreurs affichés pour chaque type de validation.
Vous pouvez passer un objet `errorMessages` en option pour personnaliser les messages d'erreurs pour chaque type de validation.

Voici un exemple de personnalisation des messages d'erreurs :

```typescript

const customMessages = {
    required: 'Ce champ est obligatoire.',
    email: 'Veuillez entrer un e-mail valide.',
    minlength: 'La longueur minimale est de {requiredLength} caractères.',
    maxlength: 'La longueur maximale est de {requiredLength} caractères.',
    numeric: 'Seuls les chiffres sont autorisés.',
    alphaNumeric: 'Lettres et chiffres uniquement.',
    telephone: 'Numéro de téléphone invalide.',
    invalidNip: 'Le NIP est invalide. Format attendu: 00-0000-00000000 ou 0A-0000-00000000.',
    min: 'La valeur minimale autorisée est {min}.',
    max: 'La valeur maximale autorisée est {max}.',
    pattern: 'Le format du champ est invalide.'
};

```

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
           <ng-input-validation [control]="form.get('alphanumeric')" [errorMessages]="customMessages"></ng-input-validation>
         </div>
         <div>
           <label for="numeric">Numeric</label>
           <input id="numeric" formControlName="numeric" />
           <ng-input-validation [control]="form.get('numeric')" [errorMessages]="customMessages"></ng-input-validation>
         </div>
         <div>
           <label for="nip">NIP</label>
           <input id="nip" formControlName="nip" />
           <ng-input-validation [control]="form.get('nip')" [errorMessages]="customMessages"></ng-input-validation>
         </div>
         <div>
           <label for="telephone">Téléphone</label>
           <input id="telephone" formControlName="telephone" />
           <ng-input-validation [control]="form.get('telephone')" [errorMessages]="customMessages"></ng-input-validation>
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

## Gestion des Erreurs Provenant du Backend

La librairie `ng-input-validation` permet également d'afficher les erreurs renvoyées par le backend directement dans le formulaire. Cela peut être utile lorsque vous recevez des erreurs de validation depuis une API ou un service backend et que vous souhaitez les afficher aux utilisateurs.

### Utilisation des erreurs backend

1. **Ajout des propriétés `backendError` et `formField`** :

   Vous pouvez passer un tableau d'erreurs renvoyées par le backend en utilisant la propriété `backendError`, associée à un champ spécifique du formulaire via la propriété `formField`.

   Exemple d'utilisation dans un template Angular :

   ```html
   <form [formGroup]="form">
     <div class="form-group">
       <label for="email">Email</label>
       <input type="text" id="email" class="form-control" formControlName="email" />
       <ng-input-validation [control]="form.get('email')"
                            [errorMessages]="customMessages"
                            [backendError]="backendErrors"
                            [formField]="'email'">
       </ng-input-validation>
     </div>
     <!-- Ajoutez d'autres champs ici -->
   </form>
   ```

2. **Structure des erreurs backend** :

   L'erreur backend est un tableau d'erreurs associé à chaque champ du formulaire. Voici un exemple de la structure des erreurs que vous pouvez recevoir :

   ```json
   {
     "email": ["L'adresse e-mail est invalide", "L'adresse e-mail est déjà utilisée"],
     "password": ["Le mot de passe est trop court"]
   }
   ```

3. **Affichage dans le template :**

   Le composant `ng-input-validation` affichera automatiquement les erreurs sous chaque champ de formulaire correspondant si le tableau `backendError` contient des erreurs pour ce champ. Exemple de code :

### Propriétés pour les erreurs backend

| Propriété      | Type    | Description                                               |
|----------------|---------|-----------------------------------------------------------|
| `backendError` | `any[]` | Un tableau contenant les erreurs provenant du backend.    |
| `formField`    | `any`   | Le champ de formulaire auquel les erreurs sont associées. |

Cette fonctionnalité permet de gérer de manière fluide l'affichage des messages d'erreurs venant du backend directement dans vos formulaires Angular.

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
- numérique
