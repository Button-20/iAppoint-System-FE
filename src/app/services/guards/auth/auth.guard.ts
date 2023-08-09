import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalsService } from 'src/app/services/core/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private globals: GlobalsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.globals.storage.isAuthenticated()) {
      return true;
    }

    this.globals.router.navigate(['auth'], {
      queryParams: { redirectUrl: state.url },
    });
    this.globals.storage.clearAllStorage();
    return false;
  }
}
