import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms'
import { FormMaterialComponent } from './form-material/form-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularMaterialModule } from './angular-material.module';
import { FormMaterialDynamicComponent } from './form-material-dynamic/form-material-dynamic.component'


@NgModule({
  declarations: [
    AppComponent,
    FormMaterialComponent,
    FormMaterialDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [
    { provide: LOCALE_ID, useValue: 'vn'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
