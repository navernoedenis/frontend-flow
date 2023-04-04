import type { AppState } from 'app/providers/store';

export const selectArticlesLimit = (state: AppState) => state.articles?.limit ?? 1;
