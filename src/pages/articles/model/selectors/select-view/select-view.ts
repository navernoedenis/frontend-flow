import type { AppState } from '@/app/providers/store';
import { ArticleView } from '@/features/article-select-view';

export const selectArticlesView = (state: AppState) => (
  state.articles?.view ?? ArticleView.NORMAL
);
