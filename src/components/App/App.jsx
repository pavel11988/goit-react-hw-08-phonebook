import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { authOperations, authSelectors } from 'redux/auth';

import AppBar from 'components/AppBar/AppBar/AppBar';
import PrivateRoute from 'components/UserMenu/PrivateRoute';
import PublicRoute from 'components/UserMenu/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContacsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(authSelectors.getIsLoadingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {' '}
      {isLoadingUser ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppBar />
          <Container>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={<PublicRoute element={<RegisterPage />} />}
                />
                <Route
                  path="/login"
                  element={<PublicRoute element={<LoginPage />} />}
                />
                <Route
                  path="/contacts"
                  element={<PrivateRoute element={<ContactsPage />} />}
                />
              </Routes>
            </Suspense>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
