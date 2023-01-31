import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { AdminComponent } from './admin/admin.component';
import { AdmincreateproductComponent } from './admincreateproduct/admincreateproduct.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfigService } from './config/config.service';

export function setupAppConfigServiceFactory(
  service: ConfigService
): Function {
  return () => service.load();
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    ContactComponent,
    ProductsComponent,
    ProductinfoComponent,
    AdminComponent,
    AdmincreateproductComponent,
    AdmineditproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: setupAppConfigServiceFactory,
        deps: [
            ConfigService
        ],
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
