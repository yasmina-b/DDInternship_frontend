import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm!:FormGroup

  constructor(private fb: FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email:['',[Validators.required]],
      phoneNumber: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  createUser() {
    let user : User
    user = new User(
      this.regForm.value.firstName,
      this.regForm.value.lastName,
      this.regForm.value.email,
      this.regForm.value.phoneNumber,
      this.regForm.value.password
    )

    this.userService.createUsers(user).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);   
      }
    );
  }


}
