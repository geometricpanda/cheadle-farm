import { PRISMIC_SLICE, PrismicTileSlice, PrismicTilesSlice } from '../../services/prismic';
import { parseRichTextUtil } from './_utils';
import { TileInterface, TilesSliceInterface } from './slices.interface';

export const tileSliceParser = (slice: PrismicTilesSlice): TilesSliceInterface =>
  ({
    type: PRISMIC_SLICE.TILES,
    body: slice.items
      .map((tile: PrismicTileSlice): TileInterface => ({
        title: tile.tile_title,
        body: parseRichTextUtil(tile.tile_content),
        alignment: tile.tile_alignment,
        light: tile.tile_light,
        image: {
          default: tile.tile_image.url,
          alt: tile.tile_image.alt
        },
      }))
  });
