import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Actions as RouterActions } from '.';

@Injectable()
export class RouterEffects  {
    constructor(
        private action$: Actions,
        private router: Router,
        private location: Location
    ) { }

    navigateEffect$ = createEffect(() => this.action$.pipe(
        ofType(RouterActions.Go),
        tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, { queryParams, ...extras });
        }),
    ), { dispatch: false });

    navigateBackEffect$ = createEffect(() => this.action$.pipe(
        ofType(RouterActions.Back),
        tap(() => this.location.back),
    ), { dispatch: false });

    navigateForwardEffect$ = createEffect(() => this.action$.pipe(
        ofType(RouterActions.Forward),
        tap(() => this.location.forward),
    ), { dispatch: false });
}