import type { AppState } from '@/app/providers/store';

export const selectArticlesSortTag = (state: AppState) => state.articles?.sort.tag ?? 'all';
