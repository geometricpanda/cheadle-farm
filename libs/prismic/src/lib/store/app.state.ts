import { RouterReducerState } from '@ngrx/router-store/src/reducer';

import { PagesReducerState } from './pages';
import { MenuReducerState } from './menu';
import { CollectionReducerState } from './collection';

export interface AppState {
  pages: PagesReducerState,
  router: RouterReducerState,
  menu: MenuReducerState,
  collection: CollectionReducerState,
}
