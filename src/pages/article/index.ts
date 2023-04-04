import { lazy } from 'react';

export const ArticlePage = lazy(() => import('./ui/article'));

export type { ArticleState, CommentsState } from './model/types';
