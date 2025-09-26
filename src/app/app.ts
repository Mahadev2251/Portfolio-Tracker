import { Component } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signinComponent } from './signin/signin';
import { SignupComponent } from "./signup/signup";
import { ForgotComponent } from "./forgot/forgot";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html'
})
export class App { }
