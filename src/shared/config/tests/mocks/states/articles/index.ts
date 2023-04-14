import type { ArticlesState } from 'pages/articles/model/types';
import { ArticleView } from 'features/select-article-view';

export const articlesStateMock: ArticlesState = {
  entities: {},
  error: '',
  hasMore: true,
  ids: [],
  isLoading: false,
  isMounted: false,
  sort: {
    key: 'all',
    limit: 8,
    order: 'asc',
    page: 1,
    query: '',
    tag: 'all',
  },
  view: ArticleView.NORMAL,
};
