import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState, selectPageAndCollection } from '@cheadle-farm/prismic';


@Injectable({
  providedIn: 'root'
})
export class CmsCanActivate implements CanActivate {

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  canActivate(): Observable<boolean> | boolean {
    return isPlatformBrowser(this.platformId)
      ? true
      : this.store$.select(selectPageAndCollection)
        .pipe(filter((page) => Boolean(page)))
        .pipe(map(() => true));
  }

}
