import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { filter, map, tap } from 'rxjs/operators';

import { AppState } from '../app.state';
import { hydratePages, PagesReducerState, selectPages } from '../pages';

const pagesTransferKey = makeStateKey<PagesReducerState>(null);

@Injectable()
export class SsrEffects {

  constructor(private store$: Store<AppState>,
              private actions$: Actions,
              @Inject(PLATFORM_ID) private platformId: Object,
              private transfer: TransferState) {
  }

  @Effect({ dispatch: false })
  onStoreChanges = this.store$.select(selectPages)
    .pipe(filter(() => isPlatformServer(this.platformId)))
    .pipe(tap(pages => this.transfer.set(pagesTransferKey, pages)));

  @Effect({ dispatch: false })
  onStoreInit = this.actions$
    .pipe(ofType(ROOT_EFFECTS_INIT))
    .pipe(filter(() => isPlatformBrowser(this.platformId)))
    .pipe(map(() => this.transfer.get(pagesTransferKey, null)))
    .pipe(filter((pages) => Boolean(pages)))
    .pipe(tap((pages: PagesReducerState) => this.store$.dispatch(hydratePages({ payload: pages }))));
}
