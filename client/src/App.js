import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPageContainer from '../src/containers/MainContainer';
import LoginContainer from '../src/containers/LoginContainer';
import AuthContainer from '../src/containers/AuthContainer';
import ErrorPage from '../src/components/ErrorPage/index';
import PrivateRoute from './PrivateRoute';
//import Header from '../src/components/Header/index';
import BookPageContainer from './containers/BookPageContainer';
//import { useSelector } from 'react-redux';
import SettingsPageContainer from '../src/containers/SettingsContainer';
import HeaderContainer from './containers/HeaderContainer';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <WelcomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/header"
            element={
              <PrivateRoute>
                <HeaderContainer />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<LoginContainer />} />
          <Route path="/registration" element={<AuthContainer />} />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <MainPageContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPageContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <BookPageContainer />
              </PrivateRoute>
            }
          />
          <Route path="/not-found-404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
