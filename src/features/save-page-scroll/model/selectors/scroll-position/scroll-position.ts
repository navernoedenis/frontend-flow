import { createSelector } from '@reduxjs/toolkit';
import type { AppState } from 'app/providers/store';

export const selectPageScroll = createSelector(
  [
    (state: AppState) => state.pageScroll,
    (_, page: keyof AppState) => page,
  ],
  (position, page) => position[page] ?? 0,
);
