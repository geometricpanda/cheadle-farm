import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionSliceInterface } from '../../store/slices';
import { AppState, selectPagesByTags,PagesReducerState } from '../../store';

@Component({
  selector: 'app-cms-collection',
  templateUrl: './cms-collection.component.html',
  styleUrls: ['./cms-collection.component.scss']
})
export class CmsCollectionComponent implements OnChanges {

  @Input() slice: CollectionSliceInterface;

  collection: Observable<PagesReducerState> = new Observable();

  constructor(private store$: Store<AppState>) {
  }

  ngOnChanges(): void {
    // This has to be in ngOnChanges as if it's in the constructor it's not getting the @Input values
    this.collection = this.store$.select(selectPagesByTags, { tags: this.slice.tags })
  }

}
