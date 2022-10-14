import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-full h-full font-sans text-stone-900 antialiased">
      <Outlet />
    </div>
  );
}

export default Layout;