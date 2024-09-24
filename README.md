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
       <ng-input-validation [error]="form.get('name')?.errors" [control]="form.get('name')" [showError]="true"> </ng-input-validation>
     </div>
     <!-- Ajoute d'autres champs de formulaire ici -->
   </form>
   ```

## Propriétés

| Propriété   | Type              | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| `control`   | `AbstractControl` | Le contrôle du formulaire à valider.             |
| `error`     | `any`             | Les erreurs de validation associées au contrôle. |
| `showError` | `boolean`         | Indique si les erreurs doivent être affichées.   |

## Types d'erreurs gérés Nativement par Angular

La librairie `ng-input-validation` prend en charge les types d'erreurs suivants :

| Type d'erreur | Message d'erreur                     |
| ------------- | ------------------------------------ |
| required      | Champ requis                         |
| email         | Renseignez une adresse e-mail valide |
| minlength     | xxx caractères minimum               |
| maxlength     | xxx caractères maximum               |
| min           | La valeur minimale autorisée est xxx |
| max           | La valeur maximale autorisée est xxx |
| pattern       | Le format du champ est invalide      |

Ces messages d'erreur peuvent être personnalisés et affichés dynamiquement en fonction des validations appliquées à chaque champ de formulaire.

## Keywords

- Angular
- Validation
- Formulaires
- Erreurs
- Librairie
- ng-input-validation
