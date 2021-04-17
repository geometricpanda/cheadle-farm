import { createReducer, on } from '@ngrx/store';
import { hydratePages, savePage, SavePageActionInterface } from './pages.actions';
import { RichTextInterface, SlicesInterface, slicesParser, parseRichTextUtil } from '../slices';

export interface PageInterface {
  title: string;
  description: RichTextInterface[];
  meta_title: string;
  meta_description: string;
  tags: string[];
  canonical: string;
  slices: SlicesInterface;
}

export interface PagesReducerState {
  [url: string]: PageInterface;
}

export const pagesInitialState: PagesReducerState = {
};

const savePageReducer = (state: PagesReducerState, { payload }: SavePageActionInterface): PagesReducerState => {

  let page: PageInterface;

  try {

    page = {
      meta_title: payload.data.meta_title,
      meta_description: payload.data.meta_description,
      canonical: payload.data.canonical,
      title: payload.data.title,
      description: parseRichTextUtil(payload.data.description),
      slices: slicesParser(payload.data.body),
      tags: payload.tags
    };

  } catch (e) {
    // Suppress Errors here - we either have a page or we dont
    // TODO: Maybe we use this to inject a 404?
  }

  return page
    ? { ...state, [payload.uid]: page }
    : state;
};

const _pagesReducer = createReducer(
  pagesInitialState,
  on(savePage, (state, action) => savePageReducer(state, action)),
  on(hydratePages, (state, action) => action.payload)
);

export function pagesReducer(state, action) {
  return _pagesReducer(state, action);
}
