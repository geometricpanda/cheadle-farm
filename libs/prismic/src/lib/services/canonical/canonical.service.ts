import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  private canonical$: HTMLLinkElement;
  private added = true;

  constructor(@Inject(DOCUMENT) private _document) {
    this.canonical$ = this._document.createElement('link');
    this.canonical$.setAttribute('rel', 'canonical');
  }

  private append() {
    this._document.head.appendChild(this.canonical$);
    this.added = true;
  }

  remove() {
    this.canonical$.remove();
    this.added = false;
  }

  setValue(value) {
    if (!this.added) {
      this.append();
    }

    (value)
      ? this.canonical$.setAttribute('href', value)
      : this.canonical$.remove();
  }
}
