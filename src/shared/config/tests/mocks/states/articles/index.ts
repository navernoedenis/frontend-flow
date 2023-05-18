import type { ArticlesState } from 'pages/articles/model/types';
import { ArticleView } from 'pages/articles/ui/articles-header/ui/select-article-view';

export const articlesStateMock: ArticlesState = {
  entities: {},
  error: '',
  hasMore: true,
  ids: [],
  isLoading: false,
  isMounted: false,
  shouldScrollToTop: false,
  sort: {
    key: 'createdAt',
    limit: 8,
    order: 'desc',
    page: 1,
    query: '',
    tag: 'all',
  },
  view: ArticleView.NORMAL,
};
