import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/service_login/auth.service';
import {UserToken} from '../../models/user-token';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authMe().pipe(
      map((res: boolean | UserToken) => {
        if (res instanceof Object) {
          const hasRole = res.role.some(role => route.data.role.includes(role));
          return hasRole ? true : this.route.createUrlTree(['/unauthorized/']);

        }
        return false;

      })
    );
  }

  _authMe(): Observable<boolean | UserToken> {
    return this.authService.verificaToken();
  }

}
