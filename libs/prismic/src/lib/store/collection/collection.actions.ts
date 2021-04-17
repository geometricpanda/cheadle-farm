import { createAction, props } from '@ngrx/store';

export enum COLLECTION_ACTIONS {
  LOADING = '[Collection]: Loading',
  LOADED = '[Collection]: Loaded',
}

export interface LoadingCollectionInterface {
  payload: number;
}

export const loadingCollection = createAction(COLLECTION_ACTIONS.LOADING, props<LoadingCollectionInterface>());
export const loadedCollection = createAction(COLLECTION_ACTIONS.LOADED);
