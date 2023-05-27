import type { AppState } from '@/app/providers/store';

export const selectArticlesMounted = (state: AppState) => state.articles?.isMounted ?? false;
