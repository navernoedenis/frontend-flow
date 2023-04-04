import type { EntityState } from '@reduxjs/toolkit';
import type { Article } from 'entities/article';

export interface ArticlesState extends EntityState<Article> {
  error: string;
  hasMore: boolean;
  isLoading: boolean;
  limit: number;
  page: number;
}

export enum ArticleView {
  NORMAL = 'normal',
  COMPACT = 'compact',
}
