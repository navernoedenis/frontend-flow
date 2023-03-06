import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';

import { HomePage, CounterPage, NotFoundPage, ProfilePage } from 'pages';

import { AppRoute, AppRoutePath } from 'shared/config/router/router.config';
import { PageLoader } from 'shared/components/page-loader';
import { PrivateRoute } from 'shared/lib/private-router';

const AppRoutes: Record<AppRoute, RouteProps> = {
  [AppRoute.HOME]: {
    path: AppRoutePath.home,
    element: <HomePage />,
  },
  [AppRoute.COUNTER]: {
    path: AppRoutePath.counter,
    element: <CounterPage />,
  },
  [AppRoute.PROFILE]: {
    path: AppRoutePath.profile,
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  [AppRoute.NOT_FOUND]: {
    path: AppRoutePath.not_found,
    element: <NotFoundPage />,
  },
};

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.entries(AppRoutes).map(([key, route]) => (
          <Route key={key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}
