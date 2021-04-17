import { TextSliceInterface } from './slices.interface';
import { PRISMIC_SLICE, PrismicTextSlice } from '../../services/prismic';
import { parseRichTextUtil } from './_utils';

export const textSliceParser = (slice: PrismicTextSlice): TextSliceInterface => ({
  type: PRISMIC_SLICE.TEXT,
  title: slice.primary.text_title,
  body: parseRichTextUtil(slice.primary.text_content)
});
