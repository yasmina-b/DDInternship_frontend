import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {
    
  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['role'];
    // const token = localStorage.getItem('user');
    // const tokenPayload = decode(token!);
    let t = [];
    t = JSON.parse( localStorage.getItem('user')!);
    if ( !this.auth.isAuthenticated()  || t.role !== expectedRole) 
    {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}