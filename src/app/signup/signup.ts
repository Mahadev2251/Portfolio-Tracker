import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mobile: string = '';

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Mobile:', this.mobile);

    alert('Signup successful!');
  }
}
