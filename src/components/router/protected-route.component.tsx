import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

const ProtectedRoute = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { pathname, search } = useLocation();

  if (!currentUser) {
    return <Navigate to={`/auth?redirect=${pathname}${search}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
