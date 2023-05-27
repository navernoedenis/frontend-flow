import type { AppState } from '@/app/providers/store';

export const selectArticlesSortKey = (state: AppState) => state.articles?.sort.key ?? 'created';
