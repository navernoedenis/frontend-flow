import type { AppState } from '@/app/providers/store';

export const selectArticlesSortOrder = (state: AppState) => state.articles?.sort.order ?? 'asc';
