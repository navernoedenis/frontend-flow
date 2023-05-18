import { lazy } from 'react';

export type { ArticlesState } from './model/types';
export const ArticlesPage = lazy(() => import('./ui/articles'));
