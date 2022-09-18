import { Injectable } from '@angular/core';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { Actions as AdminActions } from '.';

@Injectable()
export class AdminEffects {

    constructor(
        private action$: Actions,
        private dataService: DataService<ApiConfig>
    ) {}
}