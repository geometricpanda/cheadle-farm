import { PRISMIC_SLICE, PrismicDefinitionList } from '../../services/prismic';
import { DefinitionListInterface, DefinitionListSliceInterface } from './slices.interface';
import { parseRichTextUtil } from './_utils';

export const definitionListSliceParser = (slice: PrismicDefinitionList): DefinitionListSliceInterface =>
  ({
    type: PRISMIC_SLICE.DEFINITION_LIST,
    body: slice.items
      .map(({ definition_term, definition_value }): DefinitionListInterface => ({
        term: definition_term,
        definition: parseRichTextUtil(definition_value),
      }))
  });
