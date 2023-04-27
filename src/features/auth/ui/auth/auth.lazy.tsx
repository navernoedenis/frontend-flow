import { Suspense, lazy } from 'react';
import { AppLoader } from 'shared/ui';

const Auth = lazy(() => import('./auth'));

export default () => (
  <Suspense fallback={<AppLoader />}>
    <Auth />
  </Suspense>
);
