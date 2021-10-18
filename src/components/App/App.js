import { Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

import Section from '../Section';
import NavBar from '../NavBar';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

const HomePage = lazy(() => import('../Page/HomePage'));
const LoginPage = lazy(() => import('../Page/LoginPage'));
const RegisterPage = lazy(() => import('../Page/RegisterPage'));
const ContactsPage = lazy(() => import('../Page/ContactsPage'));

const App = () => {
  const isFechingCurrent = useSelector(authSelectors.getIsFechingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFechingCurrent && (
      <>
        <Section>
          <NavBar />
        </Section>

        <Suspense fallback={<div>...Loading</div>}>
          <Section>
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute path="/register" restricted redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/">
                <ContactsPage />
              </PrivateRoute>
            </Switch>
          </Section>
        </Suspense>
      </>
    )
  );
};

export default App;
