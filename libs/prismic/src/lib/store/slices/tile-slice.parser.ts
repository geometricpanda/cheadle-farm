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
        wide: tile.tile_wide,
        image: {
          default: tile.tile_image.url,
          wide: tile.tile_image.wide.url,
          alt: tile.tile_image.alt
        },
        link: {
          id: tile.tile_link.id,
          url: tile.tile_link.uid === 'home' ? '/' : tile.tile_link.uid,
          broken: tile.tile_link.isBroken
        }
      }))
      .map((tile: TileInterface) => ({
        ...tile,
        link: tile.link.id ? tile.link : null
      }))
  });
