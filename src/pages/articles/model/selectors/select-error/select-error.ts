import type { AppState } from '@/app/providers/store';

export const selectArticlesError = (state: AppState) => state.articles?.error ?? '';
