import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class TaskListGuard implements CanActivate {
  userExists: boolean;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    this.userExists = JSON.parse(localStorage.getItem('TaskUserData'));
    if (this.userExists)
      {return true; }
    else {
      this.router.navigate(['/']);
    }
  }
}
