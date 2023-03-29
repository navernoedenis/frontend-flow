import { Suspense, lazy } from 'react';
import { AppLoader } from 'shared/ui/app-loader';

const Auth = lazy(() => import('./auth'));

export default () => (
  <Suspense fallback={<AppLoader />}>
    <Auth />
  </Suspense>
);
