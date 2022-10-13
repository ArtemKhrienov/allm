import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container
} from './layout.styles';

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;