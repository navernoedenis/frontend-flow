import { Suspense, lazy } from 'react';
import { AppLoader } from '@/shared/ui/app-loader';

const AuthCard = lazy(() => import('./auth-card'));

export default () => (
  <Suspense fallback={<AppLoader />}>
    <AuthCard />
  </Suspense>
);
