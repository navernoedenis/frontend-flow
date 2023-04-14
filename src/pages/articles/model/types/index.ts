import type { EntityState } from '@reduxjs/toolkit';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from 'features/select-article-sort';

import type { ArticleTag } from 'features/select-article-tag';
import type { ArticleView } from 'features/select-article-view';
import type { Article } from 'entities/article';

export interface ArticlesState extends EntityState<Article> {
  error: string;
  hasMore: boolean;
  isLoading: boolean;
  isMounted: boolean;
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
