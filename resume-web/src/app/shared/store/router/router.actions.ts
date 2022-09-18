import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const actionType = {
    GO: '[router] Go',
    BACK: '[router] Back',
    FORWARD: '[router] Forward',
}

export const Go = createAction(
    actionType.GO,
    props<{
        path: any[],
        query?: Object,
        extras?: NavigationExtras
    }>(),
)

export const Back = createAction(
    actionType.BACK,
)

export const Forward = createAction(
    actionType.FORWARD,
)