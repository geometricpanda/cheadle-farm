import { createReducer, on } from '@ngrx/store';
import { closeMenu, openMenu } from './menu.actions';

export interface MenuLink {
  text: string;
  routerLink: string[];
}

export interface MenuReducerState {
  open: boolean;
  links: MenuLink[];
}

const menuInitialState: MenuReducerState = {
  open: false,
  links: [
    { text: 'Breeds', routerLink: ['/', 'breeds'] },
    { text: 'Eggs', routerLink: ['/', 'eggs'] },
    // { text: 'Stock List', routerLink: ['/', 'stock-list'] },
    // { text: 'Egg Recipes', routerLink: ['/', 'egg-recipes'] },
    // { text: 'Contact', routerLink: ['/', 'contact'] }
  ]
};

const _menuReducer = createReducer<MenuReducerState>(
  menuInitialState,
  on(closeMenu, (state) => ({ ...state, open: false })),
  on(openMenu, (state) => ({ ...state, open: true })),
);

export function menuReducer(state, action) {
  return _menuReducer(state, action);
}
