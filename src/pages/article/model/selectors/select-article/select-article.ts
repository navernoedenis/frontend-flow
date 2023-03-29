import type { AppState } from 'app/providers/store';

export const selectArticle = (state: AppState) => state.article ?? null;
