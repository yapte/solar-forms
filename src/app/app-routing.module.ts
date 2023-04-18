import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ClearFormPageComponent } from './pages/clear-form-page/clear-form-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'clear-form', component: ClearFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
