import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  message = '';
  success = '';

  createUser() {
    this.message = '';
    this.success = '';
    const user: User = new User();
    (user.firstName = this.regForm.value.firstName),
      (user.lastName = this.regForm.value.lastName),
      (user.email = this.regForm.value.email),
      (user.phoneNumber = this.regForm.value.phoneNumber),
      (user.password = this.regForm.value.password);

    this.userService.createUsers(user).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(response);
        this.success = 'New account created successfully';
      },
      error: (error) => {
        console.log(error);
        this.message = error.error;
      },
    });
  }
}
