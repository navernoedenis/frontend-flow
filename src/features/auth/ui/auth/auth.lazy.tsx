import { Suspense, lazy } from 'react';
import { AppLoader } from 'shared/components/app-loader';

const Auth = lazy(() => import('./auth'));

export default () => (
  <Suspense fallback={<AppLoader />}>
    <Auth />
  </Suspense>
);
