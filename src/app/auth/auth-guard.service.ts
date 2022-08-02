import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {

      //not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }

    //logeed in so return true
    return true;
  }
}