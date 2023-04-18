import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ChbComponent } from './components/chb/chb.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClearFormPageComponent } from './pages/clear-form-page/clear-form-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatePageComponent,
    ChbComponent,
    InputFileComponent,
    BannerComponent,
    ClearFormPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    ButtonModule,
    CheckboxModule,
    InputNumberModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
