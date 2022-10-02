import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';

import { ActionReducerMap, createFeatureSelector, Action } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
};

export type RouterState = RouterReducerState<RouterStateUrl>;
export const reducer = routerReducer;

export class CustomeSerializer implements RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;

        while (state.firstChild) {
            state = state.firstChild;

        }
        const { params } = state;
        if (window.sessionStorage) {
            sessionStorage.setItem('currentUrl', url);
        }
        return { url, queryParams, params };
    }
}
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');