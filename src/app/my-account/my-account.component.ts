import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  myData: any;
  newUser: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.newUser.firstName = this.user.firstName;
    this.newUser.lastName = this.user.lastName;
    this.newUser.email = this.user.email;
    this.newUser.phoneNumber = this.user.phoneNumber;
  }

  ngOnInit(): void {}

  success = '';
  error = '';

  updateUser() {
    this.success = '';
    this.error = '';
    this.userService.updateUser(this.user.id, this.newUser).subscribe({
      next: (data) => {
        this.success = 'Updated succesfully';
        this.user.firstname = this.newUser.firstName;
        this.user.lastname = this.newUser.lastName;
        this.user.phone = this.newUser.phoneNumber;
        this.user.email = this.newUser.password;
        localStorage.setItem('user', JSON.stringify(this.user));
      },
      error: (error) => {
        console.log(error.error);
        this.error = error.error;
      },
    });
  }
}
