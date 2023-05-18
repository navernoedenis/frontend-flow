import type { AppState } from 'app/providers/store';
import { ArticleView } from 'pages/articles/ui/articles-header/ui/select-article-view';

export const selectArticlesView = (state: AppState) => (
  state.articles?.view ?? ArticleView.NORMAL
);
