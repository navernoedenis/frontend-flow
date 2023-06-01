import { Navigate } from 'react-router-dom';
import {
  isAdminRole,
  isUserRole,
  selectUserAuth,
  selectUserLoading,
} from '@/entities/user';

import { PageLoader } from '@/shared/ui/page-loader';
import { useAppSelector } from '@/shared/hooks/use-store';

interface PrivateRouteProps {
  children: JSX.Element;
  isAdminRoute?: boolean;
}

export function PrivateRoute({
  children,
  isAdminRoute = false,
}: PrivateRouteProps) {
  const me = useAppSelector(selectUserAuth);
  const isLoading = useAppSelector(selectUserLoading);

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
