import type { RouteProps } from 'react-router-dom';
import { AppRoute, AppRoutePath } from 'shared/constants/routes';

import {
  AdminPage,
  ArticlePage,
  ArticlesPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from 'pages';

type AppRouteProps = RouteProps & {
  isAdmin?: boolean;
  isPrivate?: boolean;
};

export const AppRoutes: Record<AppRoute, AppRouteProps> = {
  [AppRoute.ADMIN]: {
    path: AppRoutePath.admin,
    element: <AdminPage />,
    isAdmin: true,
  },
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
