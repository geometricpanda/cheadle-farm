import { createAction, props } from '@ngrx/store';
import { PrismicDocument, PrismicPage } from '../../services/prismic';
import { PagesReducerState } from './pages.reducer';

export enum PAGES_ACTION {
  SAVE_PAGE = '[Pages]: Save Page',
  GET_PAGE = '[Pages]: Get Page',
  HYDRATE = '[Pages]: Hydrate',
}

export interface GetPageActionInterface {
  payload: {
    uid: string;
  }
}
export interface SavePageActionInterface {
  payload: PrismicDocument<PrismicPage>;
}

export interface HydrateActionInterface {
  payload: PagesReducerState;
}

export const savePage = createAction(PAGES_ACTION.SAVE_PAGE, props<SavePageActionInterface>());
export const getPage = createAction(PAGES_ACTION.GET_PAGE, props<GetPageActionInterface>());
export const hydratePages = createAction(PAGES_ACTION.HYDRATE, props<HydrateActionInterface>());
