import { PRISMIC_SLICE, PrismicHeroSlice } from '../../services/prismic';
import { parseRichTextUtil } from './_utils';
import { HeroSliceInterface } from './slices.interface';

export const heroSliceParser = (slice: PrismicHeroSlice): HeroSliceInterface => ({
  type: PRISMIC_SLICE.HERO,
  title: slice.primary.hero_title,
  body: parseRichTextUtil(slice.primary.hero_body),
  image: {
    default: slice.primary.hero_image.url,
    medium: slice.primary.hero_image.medium.url,
    large: slice.primary.hero_image.large.url,
    alt: slice.primary.hero_image.alt
  }
});
