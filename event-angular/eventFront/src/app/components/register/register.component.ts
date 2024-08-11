import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { RegisterService } from "../../services/register.service";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private rs: RegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    return null;
  }

  register(): void {
    if (this.registerForm.valid) {
      this.rs.signup(this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']).then(() => {
            // Handle successful navigation
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        },
        error: (error: any) => {
          console.error('Registration failed:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
