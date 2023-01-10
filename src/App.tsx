import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';
import ROUTES from './router';

import PreLoader from './components/pre-loader/pre-loader.component';
import Layout from './components/layout/layout.component';
import ProtectedRoute from './router/components/protected-route.component';
import PublicRoute from './router/components/public-route.component';
import Authentication from './pages/authentication/authentication.component';
import Dashboard from './pages/dashboard/dashboard.component';
import UserProfile from './pages/user-profile/user-profile.component';
import NotFound from './pages/not-found/not-found.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <React.Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.PROFILE.ROOT} element={<UserProfile />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.AUTH.ROOT} element={<Authentication />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
