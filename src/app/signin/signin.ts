import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.html',

})
export class signinComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onsignin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    if (this.username === 'Mahadev' && this.password === '1234') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  }
}