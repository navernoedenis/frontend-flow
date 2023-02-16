import { Suspense } from 'react';
import { Routes, Route, type RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/about';
import { HomePage } from 'pages/home';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/not-found';

import { AppRoute, AppRoutePath } from 'shared/config/router/router.config';
import { PageLoader } from 'shared/components/page-loader';

const AppRoutes: Record<AppRoute, RouteProps> = {
  [AppRoute.HOME]: {
    path: AppRoutePath.home,
    element: <HomePage />,
  },
  [AppRoute.ABOUT]: {
    path: AppRoutePath.about,
    element: <AboutPage />,
  },
  [AppRoute.MAIN]: {
    path: AppRoutePath.main,
    element: <MainPage />,
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
