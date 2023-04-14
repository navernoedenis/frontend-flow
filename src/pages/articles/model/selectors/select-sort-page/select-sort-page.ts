import type { AppState } from 'app/providers/store';

export const selectArticlesSortPage = (state: AppState) => state.articles?.sort.page ?? 1;
