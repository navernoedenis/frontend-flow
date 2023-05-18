import { lazy } from 'react';

export type { ArticleState, CommentsState } from './model/types';
export const ArticlePage = lazy(() => import('./ui/article'));
