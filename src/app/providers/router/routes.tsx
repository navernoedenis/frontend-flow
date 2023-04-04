import {
  ArticlePage,
  ArticlesPage,
  CounterPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from 'pages';

import { AppRoute, AppRoutePath } from 'shared/constants/routes';
import type { AppRouteProps } from './types';

export const AppRoutes: Record<AppRoute, AppRouteProps> = {
  [AppRoute.HOME]: {
    path: AppRoutePath.home,
    element: <HomePage />,
  },
  [AppRoute.COUNTER]: {
    path: AppRoutePath.counter,
    element: <CounterPage />,
  },
  [AppRoute.PROFILES]: {
    path: `${AppRoutePath.profiles}/:id`,
    element: <ProfilePage />,
    isPrivate: true,
  },
  [AppRoute.ARTICLE]: {
    path: `${AppRoutePath.article}/:id`,
    element: <ArticlePage />,
    isPrivate: true,
  },
  [AppRoute.ARTICLES]: {
    path: AppRoutePath.articles,
    element: <ArticlesPage />,
    isPrivate: true,
  },
  [AppRoute.NOT_FOUND]: {
    path: AppRoutePath.not_found,
    element: <NotFoundPage />,
  },
};
