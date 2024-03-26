import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registro", component: RegisterComponent },
  { path: "iniciosesion", component: LoginComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' }
];
