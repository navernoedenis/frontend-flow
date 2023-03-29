import { lazy } from 'react';

export const ArticlePage = lazy(() => import('./ui/article'));

export { articleReducer } from './model/slice/article';
export { commentsReducer } from './model/slice/comments';

export type { ArticleState, CommentsState } from './model/types';
