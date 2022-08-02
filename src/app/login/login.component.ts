import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();

  constructor (public router : Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  response : String = "";
  logedUser : boolean = false;
  logedAdmin : boolean = false;

  onLogin () {
    this.response = "";
    
    this.userService.loginUser(this.user).subscribe(data=>
      { console.log(data);
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(data.role);
        if(data.role == 'admin') {
          NavbarComponent.logedAdminValue(true);
          this.router.navigate(['']);
        }
        else {
          this.router.navigate(['']);
          NavbarComponent.logedUserValue(true);
        }

      },
      error=>{
        console.log(error);
        this.response = error.error;
      });
  
  }

}
