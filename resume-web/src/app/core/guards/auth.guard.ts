import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as RouterActions } from '@app/shared/store/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  loginStatus$: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    this.loginStatus$ = store.select(UserSelectors.selectIsLoggedIn);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  // help function
  checkLogin(url: string): Observable<boolean> {
    return this.loginStatus$.pipe(
        tap(status => {
            if (!status) {
              this.store.dispatch(RouterActions.Go({ path: ['user/login'] }));
            }
        }),
        take(1)
    );
  }
}
