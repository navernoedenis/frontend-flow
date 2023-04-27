import { Navigate } from 'react-router-dom';
import { selectAuthMe, selectAuthLoading } from 'features/auth';

import { PageLoader } from 'shared/ui';
import { useAppSelector } from 'shared/hooks/use-store';

interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const me = useAppSelector(selectAuthMe);
  const isLoading = useAppSelector(selectAuthLoading);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!me && !isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
}
