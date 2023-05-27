import type { AppState } from '@/app/providers/store';

export const selectArticlesHasMore = (state: AppState) => state.articles?.hasMore ?? true;
