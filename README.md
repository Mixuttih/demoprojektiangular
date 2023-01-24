# demoprojektiangular

Create and initialize new github repository

Clone repository to your local machine and open Visual Studio Code

```
git clone https://github.com/OMATUNNUS/OMAPROJEKTI
```

# Initialize angular project
https://angular.io/quick-start

https://angular.io/guide/setup-local

```
Koulun koneilla tulee lisätä käyttäjän polku ympäristömuuttujaksi
D:\Users\pekka.tamminen\AppData\Roaming\npm
$env:Path += ';D:\Users\pekka.tamminen\AppData\Roaming\npm'
```

```
npm install -g @angular/cli
# If running in windows
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# If ng command is not found, check environment Path variable (it should include npm folder)
ng new myApp
#use angular routing : yes
#stylesheet: SCSS
cd myApp
# Running application
ng serve
```

Open test application in web browser http://localhost:4200

# Adding header component to application
```
ng generate component header
```

# Add angular material ui library to project
```
ng add @angular/material
```

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

Copy https://material.angular.io/components/toolbar/examples navigation toolbar example html to header.component.html

# Adding main page to site
```
ng generate component mainpage
```

Add mainpage to routing component https://angular.io/guide/router
```
import { MainpageComponent } from './mainpage/mainpage.component'

const routes: Routes = [
  { path: '', component: MainpageComponent }
];
```

# Create components

Create Contact, Products, Product Info, Admin Site, Admin Create Product, Admin Edit Product components
```
ng generate component contact
ng generate component products
ng generate component productinfo
ng generate component admin
ng generate component admincreateproduct
ng generate component admineditproduct
```

Add new components to router
```
import { ContactComponent } from './contact/contact.component'
import { ProductsComponent } from './products/products.component'
import { ProductinfoComponent } from './productinfo/productinfo.component'
import { AdminComponent } from './admin/admin.component'
import { AdmincreateproductComponent } from './admincreateproduct/admincreateproduct.component'
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component'

...
const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductinfoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/product/create', component: AdmincreateproductComponent },
  { path: 'admin/product/edit/:id', component: AdmineditproductComponent }
```

Add links to header component

```
    <a routerLink="" routerLinkActive="active" ariaCurrentWhenActive="page">Main page</a>
    <a routerLink="/products" routerLinkActive="active" ariaCurrentWhenActive="page">Products</a>
    <a routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
    <a routerLink="/admin" routerLinkActive="active" ariaCurrentWhenActive="page">Admin</a>
```

# Add admin create page

Add form to admin create page https://material.angular.io/components/form-field/overview

Import required components ex.

```
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
```
