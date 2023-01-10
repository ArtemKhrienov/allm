import React from 'react';
import { Outlet, Navigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

const PublicRoute = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect');

  if (currentUser) {
    return <Navigate to={redirectPath || '/'} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
