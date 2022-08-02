import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

  constructor() {}

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('user');

    return !!token;
  }
}