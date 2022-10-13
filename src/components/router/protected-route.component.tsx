import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

type TProtectedRouteProps = {
  redirectPath?: string;
}

const ProtectedRoute: FC<TProtectedRouteProps> = ({ redirectPath = 'auth' }) => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;