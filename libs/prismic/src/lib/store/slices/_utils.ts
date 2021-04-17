import { PrismicRichTextItem, PrismicRichTextItemType } from '../../services/prismic';
import { RichTextInterface } from './slices.interface';

const listTypes = [
  PrismicRichTextItemType.ORDERED_LIST,
  PrismicRichTextItemType.UNORDERED_LIST
];

export const parseRichTextUtil = (body: PrismicRichTextItem[]): RichTextInterface[] =>
  body.reduce(
    (acc, curr) => {

      // If we're a list type item
      if (listTypes.includes(curr.type)) {

        // Get prev if it's available
        const prev = acc.length
          ? acc[acc.length - 1]
          : undefined;

        // If first item in a new list, create list key with current item
        if (!prev || prev.type !== curr.type) {
          const newItem = { ...curr, list: [curr] };
          return [...acc, newItem];
        }

        // If not the first item in a list, add current item to the previous list
        prev.list = [...prev.list, curr];
        return acc;

      }

      // Do nothing as it's not a list type, it's fine as is
      return [...acc, curr];

    }, [])
    .filter(item => item.text !== '');
