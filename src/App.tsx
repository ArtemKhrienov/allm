import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';

import Authentication from './routes/authentication/authentication.component';
import Dashboard from './routes/dashboard/dashboard.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='auth' element={<Authentication />} />
    </Routes>
  );
}

export default App;
