import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router';
import Cookies from 'universal-cookie';
import { useAuth } from './hooks';
import { Loader } from './components/atoms';

const ProtectedRoute = ({ Component, exact, path }: IProtectedRouteProp) => {
  const cookie = new Cookies();
  const { finished, isAuth, token } = useAuth(cookie.get('token'));

  if (token) cookie.set('token', token);

  if (!finished) return <Loader />;

  return isAuth ? (
    <Route exact={exact} path={path} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
};

interface IProtectedRouteProp {
  Component: FunctionComponent;
  exact: boolean;
  path: string;
}

export default ProtectedRoute;
