import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private router: Router) { }

  logout() {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
