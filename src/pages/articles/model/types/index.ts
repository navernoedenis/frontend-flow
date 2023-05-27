import type { EntityState } from '@reduxjs/toolkit';
import type { Article } from '@/entities/article';

import type { ArticleTag } from '@/features/article-select-tag';
import type { ArticleView } from '@/features/article-select-view';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from '@/features/article-select-sort';

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
