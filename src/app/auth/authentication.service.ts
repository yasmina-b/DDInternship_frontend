import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');

    return !!token;
  }
}
