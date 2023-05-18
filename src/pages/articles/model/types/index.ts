import type { EntityState } from '@reduxjs/toolkit';
import type { Article } from 'entities/article';

import type { ArticleTag } from '../../ui/articles-header/ui/select-article-tag';
import type { ArticleView } from '../../ui/articles-header/ui/select-article-view';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from '../../ui/articles-header/ui/select-article-sort';

export interface ArticlesState extends EntityState<Article> {
  error: string;
  hasMore: boolean;
  isLoading: boolean;
  isMounted: boolean;
  shouldScrollToTop: boolean;
  sort: {
    key: ArticleSortKey;
    limit: number;
    order: ArticleSortOrder;
    page: number;
    query: string;
    tag: ArticleTag;
  };
  view: ArticleView;
}
