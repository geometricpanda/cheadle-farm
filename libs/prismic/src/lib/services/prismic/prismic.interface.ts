import { Document } from 'prismic-javascript/types/documents';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

export enum PRISMIC_SLICE {
  TEXT = 'text',
  HERO = 'hero',
  CARDS = 'cards',
  TILES = 'tiles',
  COLLECTION = 'collection',
}

export enum PrismicRichTextItemType {
  PARAGRAPH = 'paragraph',
  UNORDERED_LIST = 'list-item',
  ORDERED_LIST = 'o-list-item',
  HEADING1 = 'heading1',
  HEADING2 = 'heading2',
  HEADING3 = 'heading3',
  HEADING4 = 'heading4',
  HEADING5 = 'heading5',
}

export interface PrismicRichTextItem {
  type: PrismicRichTextItemType;
  text: string;
  spans: [];
}

export interface PrismicTextSlice {
  slice_type: PRISMIC_SLICE.TEXT
  slice_label: string;
  primary: {
    text_content: PrismicRichTextItem[];
    text_title: string;
  };
  items: any[]
}

export interface PrismicHeroSlice {
  slice_type: PRISMIC_SLICE.HERO;
  slice_label: string;
  primary: {
    hero_title: string;
    hero_body: PrismicRichTextItem[];
    hero_image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      copyright: string;
      url: string;
      large: {
        dimensions: {
          width: number;
          height: number;
        };
        alt: string;
        copyright: string;
        url: string;
      };
      medium: {
        dimensions: {
          width: number;
          height: number;
        };
        alt: string;
        copyright: string;
        url: string;
      }
    }
  };
  items: any[]
}

export interface PrismicDocumentLink {
  id: string;
  type: 'page';
  tags: string[];
  slug: string;
  lang: 'en-gb';
  uid: string;
  link_type: 'Document';
  isBroken: boolean;
}

export interface PrismicCardSlice {
  card_image: {
    dimensions: {
      width: number;
      height: number;
    },
    alt: string;
    copyright: string;
    url: string;
    wide: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      copyright: string;
      url: string;
    };
  };
  card_title: string;
  card_content: PrismicRichTextItem[];
  card_link: PrismicDocumentLink;
}

export interface PrismicTileSlice {
  tile_image: {
    dimensions: {
      width: number;
      height: number;
    },
    alt: string;
    copyright: string;
    url: string;
    wide: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      copyright: string;
      url: string;
    };
  };
  tile_title: string;
  tile_content: PrismicRichTextItem[];
  tile_link: PrismicDocumentLink;
  tile_wide: boolean;
}

export interface PrismicTilesSlice {
  slice_type: PRISMIC_SLICE.TILES;
  slice_label: string;
  primary: {};
  items: PrismicTileSlice[]
}

export interface PrismicCardsSlice {
  slice_type: PRISMIC_SLICE.CARDS;
  slice_label: string;
  primary: {};
  items: PrismicCardSlice[]
}

export interface PrismicCollectionSlice {
  slice_type: PRISMIC_SLICE.COLLECTION;
  slice_label: string;
  items: { tag: string; }[];
  primary: {
    canonicals: boolean;
  };
}

export type PrismicDynamic =
  | PrismicTextSlice
  | PrismicHeroSlice
  | PrismicCardsSlice
  | PrismicTilesSlice
  | PrismicCollectionSlice;

export interface PrismicPage {
  meta_title: string;
  meta_description: string;
  canonical: string;
  title: string;
  description: PrismicRichTextItem[];
  body: PrismicDynamic[];
  tags: string[];
}

export interface PrismicDocument<T> extends Document {
  data: T;
}

export interface PrismicApiSearchResponse<T> extends ApiSearchResponse {
  results: PrismicDocument<T>[];
}
