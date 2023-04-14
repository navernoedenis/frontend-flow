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
          const privateElement = (
            <PrivateRoute>
              <>{route.element}</>
            </PrivateRoute>
          );

          return (
            <Route
              key={key}
              path={route.path}
              element={route.isPrivate ? privateElement : route.element}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
