import type { AppState } from 'app/providers/store';

export const selectArticlesLoading = (state: AppState) => state.articles?.isLoading ?? false;
