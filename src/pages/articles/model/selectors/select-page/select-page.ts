import type { AppState } from 'app/providers/store';

export const selectArticlesPage = (state: AppState) => state.articles?.page ?? 1;
