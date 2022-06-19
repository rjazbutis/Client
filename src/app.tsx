import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

import store from './store';
import WishList from './pages/wishlist-page';

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
          path="auth/wishlist"
          element={(
            <RequireAuth>
              <WishList />
            </RequireAuth>
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
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  </ReduxProvider>
);

export default App;
