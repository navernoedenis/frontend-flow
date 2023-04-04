import { lazy } from 'react';

export const ArticlesPage = lazy(() => import('./ui/articles'));

export type { ArticlesState } from './model/types';
