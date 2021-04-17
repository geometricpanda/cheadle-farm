import { SlicesInterface } from './slices.interface';
import { PRISMIC_SLICE, PrismicDynamic } from '../../services/prismic';
import { textSliceParser } from './text-slice.parser';
import { heroSliceParser } from './hero-slice.parser';
import { cardSliceParser } from './cards-slice.parser';
import { tileSliceParser } from './tile-slice.parser';
import { collectionSliceParser } from './collection-slice.parser';
import { contactFormParser } from './contact-form.parser';

const parserMethods = {
  [PRISMIC_SLICE.TEXT]: textSliceParser,
  [PRISMIC_SLICE.HERO]: heroSliceParser,
  [PRISMIC_SLICE.CARDS]: cardSliceParser,
  [PRISMIC_SLICE.TILES]: tileSliceParser,
  [PRISMIC_SLICE.COLLECTION]: collectionSliceParser,
  [PRISMIC_SLICE.CONTACT_FORM]: contactFormParser,
};

export const slicesParser = (slices: PrismicDynamic[]): SlicesInterface =>
  slices
    .map(slice => parserMethods[slice.slice_type]
      ? parserMethods[slice.slice_type](slice as any)
      : null)
    .filter(slice => !!slice);
