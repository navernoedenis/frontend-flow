import type { EntityState } from '@reduxjs/toolkit';

import type { Article } from '@/entities/article';
import type { Comment } from '@/entities/comment';

export interface ArticleState {
  data: Article | null;
  error: string;
  isLoading: boolean;
}

export interface CommentsState extends EntityState<Comment> {
  error: string;
  isLoading: boolean;
}
