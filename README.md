# demoprojektiangular

git clone https://github.com/OMATUNNUS/OMAPROJEKTI

# Initialize angular project
https://angular.io/quick-start
https://angular.io/guide/setup-local

npm install -g @angular/cli

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

ng new myApp

-use angular routing : yes

-stylesheet: SCSS

cd myApp

# Running application
ng serve

Open test application http://localhost:4200

# Adding header component to application
ng generate component header

# Add angular material ui library to project
ng add @angular/material

# Modifying app.component.html
```
<app-header></app-header>
<router-outlet></router-outlet>
```

# Add material toolbar
https://material.angular.io/components/toolbar/overview

Import toolbar and icons components to app.module.ts

```
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

...

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],

```

Copy https://material.angular.io/components/toolbar/examples navigation toolbar example html to header.componen.html