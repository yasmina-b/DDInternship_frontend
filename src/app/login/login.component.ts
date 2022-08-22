import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(public router: Router, public userService: UserService) {}

  ngOnInit(): void {}

  message = '';
  success = '';
  logedUser: boolean = false;
  logedAdmin: boolean = false;

  onLogin() {
    this.message = '';
    this.success = '';

    this.userService.userLogin(this.user).subscribe({
      next: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        this.success = 'Log in successful';
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log(error);
        this.message = error.error;
      },
    });
  }
}
