import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const.ts';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: React.ReactNode;
};

function PrivateRoute({ authStatus, children }: PrivateRouteProps) {
  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
