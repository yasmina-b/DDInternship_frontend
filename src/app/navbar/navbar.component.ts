import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public classRef = NavbarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  static logedUser : boolean;
  static logedAdmin : boolean;

  static logedUserValue (logedUser1 : boolean) {
    NavbarComponent.logedUser = logedUser1;

  }

  static logedAdminValue (logedAdmin1: boolean) {
    NavbarComponent.logedAdmin = logedAdmin1;

  }



}
