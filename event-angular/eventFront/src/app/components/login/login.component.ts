import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAdminLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      //role: ['USER']
    });
  }
  username: string | undefined
  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.loginService.login(loginData).subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          const role = response.role;
          console.log(response);
          if (role === 'ADMIN') {
            this.router.navigate(['/admin/dashboardAdmin']);
            console.log("Admin logged in");
          } else if (role === 'CLIENT') {
            this.router.navigate(['/user/dashboard']);
            console.log("User logged in");
          } else {
            console.error("Role not recognized");
          }
        },
        error: (error: any) => {
          console.error('Login failed:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
