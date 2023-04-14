import {
  ArticlePage,
  ArticlesPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from 'pages';

import { AppRoute, AppRoutePath } from 'shared/constants/routes';
import type { AppRouteProps } from '../types';

export const AppRoutes: Record<AppRoute, AppRouteProps> = {
  [AppRoute.HOME]: {
    path: AppRoutePath.home,
    element: <HomePage />,
  },
  [AppRoute.PROFILES]: {
    path: `${AppRoutePath.profiles}/:id`,
    element: <ProfilePage />,
    isPrivate: true,
  },
  [AppRoute.ARTICLE]: {
    path: `${AppRoutePath.article}/:id`,
    element: <ArticlePage />,
  },
  [AppRoute.ARTICLES]: {
    path: AppRoutePath.articles,
    element: <ArticlesPage />,
  },
  [AppRoute.NOT_FOUND]: {
    path: AppRoutePath.not_found,
    element: <NotFoundPage />,
  },
};
