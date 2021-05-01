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


export interface DefinitionListInterface {
  term: string;
  definition: RichTextInterface[];
}


export interface TileInterface {
  image: {
    default: string;
    alt: string;
  };
  alignment: boolean;
  title: string;
  light: boolean;
  body: RichTextInterface[];
}

export interface CardsSliceInterface {
  type: PRISMIC_SLICE.CARDS;
  body: CardInterface[]
}

export interface DefinitionListSliceInterface {
  type: PRISMIC_SLICE.DEFINITION_LIST;
  body: DefinitionListInterface[]
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
    small: string;
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

export interface ContactFormSliceInterface {
  type: PRISMIC_SLICE.CONTACT_FORM,
}

export type SliceInterface =
  | TextSliceInterface
  | HeroSliceInterface
  | CardsSliceInterface
  | TilesSliceInterface
  | CollectionSliceInterface
  | ContactFormSliceInterface
  | DefinitionListSliceInterface;

export type SlicesInterface = SliceInterface[];
