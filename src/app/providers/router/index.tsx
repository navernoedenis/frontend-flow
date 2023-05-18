import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'shared/ui/page-loader';
import { PrivateRoute } from 'shared/lib/components';

import { AppRoutes } from './routes';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.entries(AppRoutes).map(([key, route]) => {
          let routeElement = route.element;

          if (route.isPrivate) {
            routeElement = (
              <PrivateRoute>
                <>{route.element}</>
              </PrivateRoute>
            );
          }

          if (route.isAdmin) {
            routeElement = (
              <PrivateRoute isAdminRoute>
                <>{route.element}</>
              </PrivateRoute>
            );
          }

          return <Route key={key} path={route.path} element={routeElement} />;
        })}
      </Routes>
    </Suspense>
  );
}
