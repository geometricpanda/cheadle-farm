import { PRISMIC_SLICE, PrismicCardSlice, PrismicCardsSlice } from '../../services/prismic';
import { parseRichTextUtil } from './_utils';
import { CardInterface, CardsSliceInterface } from './slices.interface';

export const cardSliceParser = (slice: PrismicCardsSlice): CardsSliceInterface =>
  ({
    type: PRISMIC_SLICE.CARDS,
    body: slice.items
      .map((card: PrismicCardSlice): CardInterface => ({
        title: card.card_title,
        body: parseRichTextUtil(card.card_content),
        image: {
          default: card.card_image.url,
          wide: card.card_image.wide.url,
          alt: card.card_image.alt
        },
        link: {
          id: card.card_link.id,
          url: card.card_link.uid === 'home' ? '/' : card.card_link.uid,
          broken: card.card_link.isBroken
        }
      }))
      .map((card: CardInterface) => ({
        ...card,
        link: card.link.id ? card.link : null
      }))
  });
