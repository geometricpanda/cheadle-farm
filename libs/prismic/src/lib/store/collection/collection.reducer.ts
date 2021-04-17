import { createReducer, on } from '@ngrx/store';
import { loadedCollection, loadingCollection } from './collection.actions';

export interface CollectionReducerState {
  inFlight: number;
}

export const initialState: CollectionReducerState = {
  inFlight: 0
};

const _collectionsReducer = createReducer(
  initialState,
  on(loadingCollection, (state, {payload = 1}) => ({ ...state, inFlight: state.inFlight + payload })),
  on(loadedCollection, (state) => ({ ...state, inFlight: state.inFlight - 1 }))
);

export function collectionReducer(state, action) {
  return _collectionsReducer(state, action);
}
