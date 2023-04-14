import type { AppState } from 'app/providers/store';

export const selectArticlesSortLimit = (state: AppState) => state.articles?.sort.limit ?? 8;
