import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/Components/login-page/login-page.component';
import { CreatePageComponent } from './modules/Components/register/create-page/create-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { QualificationPageComponent } from './modules/Components/register/qualification-page/qualification-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PreviewPageComponent } from './modules/Components/register/preview-page/preview-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreatePageComponent,
    NavbarComponent,
    QualificationPageComponent,
    HeaderComponent,
    PreviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
