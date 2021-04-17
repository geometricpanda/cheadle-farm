import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export interface RouterInterface {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<RouterInterface, fromRouter.RouterReducerState<any>>('router');
