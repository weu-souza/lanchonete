import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../../service/service_login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdmGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.eadm()) {
      this.route.navigate(['nao-encontrada']);
      return false;
    }
    return true;
  }

}