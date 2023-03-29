import { Navigate } from 'react-router-dom';
import { selectAuth } from 'features/auth';

import { PageLoader } from 'shared/ui/page-loader';
import { useAppSelector } from 'shared/hooks/use-store';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAppSelector(selectAuth);

  if (auth.isLoading) {
    return <PageLoader />;
  }

  if (!auth.me && !auth.isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
};
