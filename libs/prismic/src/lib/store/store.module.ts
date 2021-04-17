import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppState } from './app.state';

import { pagesReducer } from './pages/pages.reducer';
import { menuReducer } from './menu/menu.reducer';
import { collectionReducer } from './collection/collection.reducer';

import { PagesEffects } from './pages/pages.effects';
import { MenuEffects } from './menu/menu.effects';
import { SsrEffects } from './ssr/ssr.effects';

export const reducers: ActionReducerMap<AppState> = {
  pages: pagesReducer,
  router: routerReducer,
  menu: menuReducer,
  collection: collectionReducer
};

@NgModule({
  imports: [
    BrowserTransferStateModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([
      PagesEffects,
      MenuEffects,
      SsrEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [
    StoreModule
  ]
})
export class AppStoreModule {
}
