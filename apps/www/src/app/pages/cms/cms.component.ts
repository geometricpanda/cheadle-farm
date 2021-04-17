import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { select, Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';

import { AppState, CanonicalService, selectPageAndCollection } from '@cheadle-farm/prismic';

@Component({
  selector: 'app-cms',
  template: `
    <app-renderer [content]="store$ | async"></app-renderer>
  `
})
export class CmsComponent {

  store$ = this.store
    .pipe(select(selectPageAndCollection))
    .pipe(filter((page) => !!page))
    .pipe(tap(page => page?.meta_title && this.title.setTitle(page.meta_title + ' | Cheadle Farm')))
    .pipe(tap(page => page?.meta_description && this.meta.updateTag({
      name: 'description',
      content: page.meta_description
    })))
    .pipe(tap(page => page?.canonical
      ? this.canonical.setValue(page.canonical)
      : this.canonical.remove()));

  constructor(private store: Store<AppState>,
              private title: Title,
              private meta: Meta,
              private canonical: CanonicalService) {
  }

}
