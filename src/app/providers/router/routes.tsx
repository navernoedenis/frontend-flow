import type { RouteProps } from 'react-router-dom';
import {
  AdminPage,
  ArticlePage,
  ArticlesPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from '@/pages';

import { AppRoute, routes } from '@/shared/constants/routes';

type AppRouteProps = RouteProps & {
  isAdmin?: boolean;
  isPrivate?: boolean;
};

export const AppRoutes: Record<AppRoute, AppRouteProps> = {
  [AppRoute.ADMIN]: {
    path: routes.admin(),
    element: <AdminPage />,
    isAdmin: true,
  },
  [AppRoute.HOME]: {
    path: routes.home(),
    element: <HomePage />,
  },
  [AppRoute.PROFILES]: {
    path: routes.profile(':id'),
    element: <ProfilePage />,
    isPrivate: true,
  },
  [AppRoute.ARTICLE]: {
    path: routes.article(':id'),
    element: <ArticlePage />,
  },
  [AppRoute.ARTICLES]: {
    path: routes.articles(),
    element: <ArticlesPage />,
  },
  [AppRoute.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
