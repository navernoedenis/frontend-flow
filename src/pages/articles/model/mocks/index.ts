import { ArticleView } from '@/features/article-select-view';
import type { ArticlesState } from '../types';

export const articlesPageStateMock: ArticlesState = {
  entities: {},
  error: '',
  hasMore: true,
  ids: [],
  isLoading: false,
  isMounted: false,
  shouldScrollToTop: false,
  sort: {
    key: 'created',
    limit: 8,
    order: 'desc',
    page: 1,
    query: '',
    tag: 'all',
  },
  view: ArticleView.NORMAL,
};
