

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  messgerr: string = '';  // Initialize the error message variable

  constructor(private authService: AuthService, private router: Router) {}

  email: string = '';
  password: string = '';

  login(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value; // Destructure form values for email and password
      this.authService.signin(email, password)  // Call login method (not signup)
        .then(() => {
          this.router.navigate(['/']);  // Navigate to home if login is successful
        })
        .catch((error) => {
          console.log(`ERROR : ${error}`);
        });
    } else {
      this.messgerr = 'Please fill out all fields correctly.';
    }
  }
}
