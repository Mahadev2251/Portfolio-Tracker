import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset.html',
  styleUrls: ['./reset.css']
})
export class ResetComponent {
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  otpError: boolean = false;
  passwordMismatch: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  constructor(private route: ActivatedRoute) {
    // read query params to prefill email if provided
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
      }
    });
  }
  resetPassword(): void {
    if (!this.email.trim() || !this.otp.trim()) {
      alert('⚠️ Please enter email and OTP');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    alert('✅ Password has been reset successfully!');

    // Clear form
    this.email = '';
    this.otp = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
