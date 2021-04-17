import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../app.state';
import { closeMenu, MENU_ACTIONS, openMenu } from './menu.actions';

import { selectMenu } from './menu.selectors';

@Injectable()
export class MenuEffects {

  constructor(private store$: Store<AppState>,
              private actions$: Actions,
              @Optional() @Inject(DOCUMENT) private _document: Document) {
  }

  @Effect({ dispatch: false })
  onNavigate = this.actions$
    .pipe(ofType(ROUTER_NAVIGATED))
    .pipe(tap(() => this.store$.dispatch(closeMenu())));

  @Effect({ dispatch: false })
  onOpen = this.actions$
    .pipe(ofType(MENU_ACTIONS.OPEN))
    .pipe(filter(() => !!this._document))
    .pipe(tap(() => this._document.body.style.overflow = 'hidden'));

  @Effect({ dispatch: false })
  onClose = this.actions$
    .pipe(ofType(MENU_ACTIONS.CLOSE))
    .pipe(filter(() => !!this._document))
    .pipe(tap(() => this._document.body.style.overflow = ''));

  @Effect({ dispatch: false })
  onToggle = this.actions$
    .pipe(ofType(MENU_ACTIONS.TOGGLE))
    .pipe(withLatestFrom(this.store$.select(selectMenu)))
    .pipe(tap(([_, menu]) => this.store$.dispatch(menu.open
      ? closeMenu()
      : openMenu())));


}
