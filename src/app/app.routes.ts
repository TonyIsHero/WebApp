import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'/auth'},
    {path:'auth', component: LoginComponent},
    {path:'home', component:HomeComponent}
];
