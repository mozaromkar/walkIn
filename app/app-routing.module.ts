import { PreviewPageComponent } from './modules/Components/register/preview-page/preview-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { QualificationPageComponent } from './modules/Components/register/qualification-page/qualification-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CreatePageComponent } from './modules/Components/register/create-page/create-page.component';
import { LoginPageComponent } from './modules/Components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LoginPageComponent },
{ path: 'createaccount', component: CreatePageComponent },
{ path: '', component: NavbarComponent },
{ path: 'qualification', component: QualificationPageComponent },
{ path: '', component: HeaderComponent },
{ path: 'preview', component: PreviewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
