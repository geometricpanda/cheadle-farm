import { PRISMIC_SLICE, PrismicCollectionSlice } from '../../services/prismic';
import { CollectionSliceInterface } from './slices.interface';

export const collectionSliceParser = (slice: PrismicCollectionSlice): CollectionSliceInterface =>
  ({
    type: PRISMIC_SLICE.COLLECTION,
    tags: slice.items.map(item => item.tag).filter(tag => !!tag),
    canonicals: slice.primary.canonicals,
  });
