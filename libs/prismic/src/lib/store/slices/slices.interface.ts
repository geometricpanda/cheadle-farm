import { PRISMIC_SLICE, PrismicRichTextItemType } from '../../services/prismic';

export interface DocumentRefInterface {
  id: string;
  url: string;
  broken: boolean;
}

export interface CardInterface {
  image: {
    default: string;
    wide: string;
    alt: string;
  };
  title: string;
  body: RichTextInterface[];
  link: DocumentRefInterface;
}


export interface TileInterface {
  image: {
    default: string;
    wide: string;
    alt: string;
  };
  wide: boolean;
  title: string;
  body: RichTextInterface[];
  link: DocumentRefInterface;
}

export interface CardsSliceInterface {
  type: PRISMIC_SLICE.CARDS;
  body: CardInterface[]
}
export interface TilesSliceInterface {
  type: PRISMIC_SLICE.TILES;
  body: TileInterface[]
}

export interface RichTextInterface {
  type: PrismicRichTextItemType;
  text: string;
  spans: [];
}

export interface HeroSliceInterface {
  type: PRISMIC_SLICE.HERO;
  title: string;
  body: RichTextInterface[];
  image: {
    default: string;
    medium: string;
    large: string;
    alt: string;
  }
}

export interface TextSliceInterface {
  type: PRISMIC_SLICE.TEXT;
  title: string;
  body: RichTextInterface[];
}


export interface CollectionSliceInterface {
  type: PRISMIC_SLICE.COLLECTION;
  tags: string[];
  canonicals: boolean;
}

export type SliceInterface =
  | TextSliceInterface
  | HeroSliceInterface
  | CardsSliceInterface
  | TilesSliceInterface
  | CollectionSliceInterface;

export type SlicesInterface = SliceInterface[];
