import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectRouter } from '../router';
import { PageInterface, PagesReducerState } from './pages.reducer';

export const selectPages = createFeatureSelector<PagesReducerState>('pages');

export const selectCurrentPage = createSelector(
  selectPages,
  fromRouter.getSelectors(selectRouter).selectRouteParam('uid'),
  (pages, uid = 'home') => pages[uid]
);

export const selectUids = createSelector(
  selectPages,
  (pages) => Object.keys(pages)
);

export const selectPagesByTags = createSelector(
  selectPages,
  (pages, { tags = [] }): PagesReducerState =>
    Object.entries(pages)
      .filter(([_, page]: [string, PageInterface]) => tags
        .map(tag => page.tags.includes(tag))
        .reduce((isValid, tagPresent) => tagPresent ? tagPresent : false, false))
      .reduce((acc, [uid, page]: [string, PageInterface]) => ({ ...acc, [uid]: page }), {})
);
