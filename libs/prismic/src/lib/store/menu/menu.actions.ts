import { createAction } from '@ngrx/store';

export enum MENU_ACTIONS {
  OPEN = '[Menu]: Open',
  CLOSE = '[Menu]: Close',
  TOGGLE = '[Menu]: Toggle',
}

export const openMenu = createAction(MENU_ACTIONS.OPEN);
export const closeMenu = createAction(MENU_ACTIONS.CLOSE);
export const toggleMenu = createAction(MENU_ACTIONS.TOGGLE);
