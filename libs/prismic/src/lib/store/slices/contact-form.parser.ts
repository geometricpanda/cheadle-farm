import { ContactFormSliceInterface } from './slices.interface';
import { PRISMIC_SLICE, PrismicContactFormSlice } from '../../services/prismic';

export function contactFormParser(slice: PrismicContactFormSlice): ContactFormSliceInterface {
  return {
    type: PRISMIC_SLICE.CONTACT_FORM,
  }
}
