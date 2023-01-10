import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PreLoader from 'components/pre-loader/pre-loader.component';

import { selectIsUserLoading } from 'store/user/user.selector';

const Layout = () => {
  const isUserLoading = useSelector(selectIsUserLoading);

  return (
    <div className="w-full h-full font-sans text-stone-900 antialiased">
      {isUserLoading ? <PreLoader /> : <Outlet />}
    </div>
  );
};

export default Layout;
