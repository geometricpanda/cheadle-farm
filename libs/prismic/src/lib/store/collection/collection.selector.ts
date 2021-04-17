import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CollectionReducerState } from './collection.reducer';
import { selectCurrentPage } from '../pages/pages.selectors';

const selectCollection = createFeatureSelector<CollectionReducerState>('collection');

export const selectCollectionIsLoading = createSelector(
  selectCollection,
  (collection) => collection.inFlight
);

export const selectPageAndCollection = createSelector(
  selectCurrentPage,
  selectCollectionIsLoading,
  (state1, state2) => !state2 && state1
);
