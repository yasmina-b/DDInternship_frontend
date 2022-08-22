import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    let t = [];
    t = JSON.parse(localStorage.getItem('user')!);
    console.log(t.role, expectedRole);
    if (!this.auth.isAuthenticated() || t.role !== expectedRole) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
