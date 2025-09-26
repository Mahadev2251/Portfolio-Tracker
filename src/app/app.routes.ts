import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup';
import { signinComponent } from './signin/signin';
import { ForgotComponent } from './forgot/forgot';
import { ResetComponent } from './reset/reset';

export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: signinComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'reset', component: ResetComponent },
    // add future routes here
];
