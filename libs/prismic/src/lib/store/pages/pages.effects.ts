import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { filter, map, mergeMap, pluck, tap, withLatestFrom } from 'rxjs/operators';

import {
  PRISMIC_SLICE,
  PrismicCollectionSlice,
  PrismicDocument,
  PrismicPage,
  PrismicService
} from '../../services/prismic';

import {
  getPage,
  GetPageActionInterface,
  PAGES_ACTION,
  savePage,
  SavePageActionInterface
} from './pages.actions';

import { selectUids } from './pages.selectors';

import { loadedCollection, loadingCollection } from '../collection';

@Injectable()
export class PagesEffects {

  constructor(private actions$: Actions,
              private store$: Store,
              @Inject(PLATFORM_ID) private platformId: Object,
              private prismicService: PrismicService) {
  }

  @Effect({ dispatch: false })
  navigateStarted = this.actions$
    .pipe(ofType(ROUTER_NAVIGATION))
    .pipe(map((routerEvent: RouterNavigatedAction) =>
      routerEvent.payload.routerState.root.firstChild?.params.uid))
    .pipe(map(uid => uid || 'home'))
    .pipe(withLatestFrom(this.store$.select(selectUids)))
    .pipe(filter<[string, string[]]>(([uid, uids]) => !uids.includes(uid)))
    .pipe(tap<[string, string[]]>(([uid]) =>
      this.store$.dispatch(getPage({ payload: { uid } }))));

  @Effect({ dispatch: false })
  pageLoad = this.actions$
    .pipe(ofType(PAGES_ACTION.GET_PAGE))
    .pipe(tap(() => this.store$.dispatch(loadingCollection({ payload: 1 }))))
    .pipe(map((action: GetPageActionInterface) => action.payload.uid))
    .pipe(mergeMap(uid => this.prismicService.getPageByUid(uid)))
    .pipe(pluck('results'))
    .pipe(tap<PrismicDocument<PrismicPage>[]>(pages =>
      pages.forEach(page => this.store$.dispatch(savePage({ payload: page })))));

  @Effect({ dispatch: false })
  pageSaved = this.actions$
    .pipe(ofType(PAGES_ACTION.SAVE_PAGE))
    .pipe(map((action: SavePageActionInterface) => {
      const tags = action.payload.data.body
        .filter(slice => slice.slice_type === PRISMIC_SLICE.COLLECTION)
        .map((slices: PrismicCollectionSlice) => slices.items.map(item => item.tag))
        .reduce((acc, tag) => [...acc, ...tag], [])
        .filter((tag) => !!tag);
      return [...new Set(tags)];
    }))
    .pipe(tap((tags) => !tags.length && this.store$.dispatch(loadedCollection())))
    .pipe(filter(tags => tags.length > 0))
    .pipe(withLatestFrom(this.store$.select(selectUids)))
    .pipe(mergeMap(([tags, knownUids]) => this.prismicService.getPagesByTags(tags, knownUids)))
    .pipe(pluck('results'))
    .pipe(tap((results) => this.store$.dispatch(loadingCollection({ payload: results.length }))))
    .pipe(tap((pages) => pages.forEach(page => this.store$.dispatch(savePage({ payload: page })))))
    .pipe(tap(() => this.store$.dispatch(loadedCollection())));

}
