import type { AppState } from '@/app/providers/store';

export const selectShouldScrollToTop = (state: AppState) => (
  state.articles?.shouldScrollToTop ?? false
);
