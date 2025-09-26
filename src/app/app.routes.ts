import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup';
import { signinComponent } from './signin/signin';

export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: signinComponent },
    // add future routes here
];
