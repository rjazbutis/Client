import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

import store from './store';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
      </Route>
    </Routes>
  </ReduxProvider>
);

export default App;
