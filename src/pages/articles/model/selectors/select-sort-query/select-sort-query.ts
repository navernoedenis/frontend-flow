import type { AppState } from '@/app/providers/store';

export const selectArticlesSortQuery = (state: AppState) => state.articles?.sort.query ?? '';
