import { Navigate } from 'react-router-dom';
import { selectAuthMe, selectAuthLoading } from 'features/auth';

import { isAdminRole, isUserRole } from 'shared/lib/user-roles';
import { PageLoader } from 'shared/ui/page-loader';
import { useAppSelector } from 'shared/hooks/use-store';

interface PrivateRouteProps {
  children: JSX.Element;
  isAdminRoute?: boolean;
}

export function PrivateRoute({
  children,
  isAdminRoute = false,
}: PrivateRouteProps) {
  const me = useAppSelector(selectAuthMe);
  const isLoading = useAppSelector(selectAuthLoading);

  if (isLoading) {
    return <PageLoader />;
  }

  const isUser = me && isUserRole(me.roles);
  const isAdmin = me && isAdminRole(me.roles);

  if (!isUser || (isAdminRoute && !isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
