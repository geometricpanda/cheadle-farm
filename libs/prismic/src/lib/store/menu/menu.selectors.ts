import { createFeatureSelector } from '@ngrx/store';
import { MenuReducerState } from './menu.reducer';

export const selectMenu = createFeatureSelector<MenuReducerState>('menu');
